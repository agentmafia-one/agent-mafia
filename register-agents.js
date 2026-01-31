const ethers = require('ethers');
const fs = require('fs');
const path = require('path');

const RPC = 'https://base-mainnet.public.blastapi.io';
const REGISTRY = '0x9E39d2ac18b1C1d0644D77a68C1B76A9CB54Aa25';
const USDC = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
const NOVA_KEY = '40c62e48e3887980fee229b5d078d776723b50c601194c816aef2889f7f704c5';

const REGISTRY_ABI = [
  'function isAgent(address) view returns (bool)',
  'function registrationFee() view returns (uint256)',
  'function register(string calldata metadataUri) external',
  'function getAgent(address) view returns (tuple(string metadataUri, uint256 reputation, uint256 completedBounties, bool active))'
];

const ERC20_ABI = [
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)'
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const novaWallet = new ethers.Wallet(NOVA_KEY, provider);
  
  console.log('Nova wallet:', novaWallet.address);
  
  const registry = new ethers.Contract(REGISTRY, REGISTRY_ABI, provider);
  const usdc = new ethers.Contract(USDC, ERC20_ABI, provider);
  
  // Get registration fee
  const regFee = await registry.registrationFee();
  console.log('Registration fee:', ethers.utils.formatUnits(regFee, 6), 'USDC');
  
  // Load all sub-agent configs
  const subAgentDir = '/home/ifc/clawd/projects/agent-mafia/sub-agents';
  const files = fs.readdirSync(subAgentDir).filter(f => f.endsWith('.json'));
  
  const agents = [];
  for (const file of files) {
    const config = JSON.parse(fs.readFileSync(path.join(subAgentDir, file)));
    agents.push(config);
  }
  
  console.log(`\nFound ${agents.length} agent configs\n`);
  
  // Check registration status for all
  const unregistered = [];
  for (const agent of agents) {
    const isRegistered = await registry.isAgent(agent.address);
    console.log(`${agent.name}: ${isRegistered ? '✅ Registered' : '❌ Not registered'}`);
    if (!isRegistered) {
      unregistered.push(agent);
    }
  }
  
  console.log(`\n${unregistered.length} agents need registration\n`);
  
  if (unregistered.length === 0) {
    console.log('All agents already registered!');
    return;
  }
  
  // Process each unregistered agent
  const usdcWithNova = usdc.connect(novaWallet);
  
  for (const agent of unregistered) {
    console.log(`\n=== Processing ${agent.name} ===`);
    console.log(`Address: ${agent.address}`);
    
    // Check USDC balance
    const usdcBalance = await usdc.balanceOf(agent.address);
    console.log(`USDC balance: ${ethers.utils.formatUnits(usdcBalance, 6)}`);
    
    // Check ETH balance
    const ethBalance = await provider.getBalance(agent.address);
    console.log(`ETH balance: ${ethers.utils.formatEther(ethBalance)}`);
    
    // Send USDC if needed (need at least 5 USDC for reg fee)
    const neededUsdc = ethers.utils.parseUnits('5.1', 6);
    if (usdcBalance.lt(neededUsdc)) {
      console.log('Sending 5.1 USDC from Nova...');
      const tx = await usdcWithNova.transfer(agent.address, neededUsdc);
      console.log(`TX: ${tx.hash}`);
      await tx.wait();
      console.log('USDC sent ✅');
      await sleep(3000);
    }
    
    // Send ETH if needed
    const neededEth = ethers.utils.parseEther('0.0002');
    if (ethBalance.lt(neededEth)) {
      console.log('Sending 0.0002 ETH from Nova...');
      const tx = await novaWallet.sendTransaction({
        to: agent.address,
        value: neededEth
      });
      console.log(`TX: ${tx.hash}`);
      await tx.wait();
      console.log('ETH sent ✅');
      await sleep(3000);
    }
    
    // Create wallet for this agent
    const agentWallet = new ethers.Wallet(agent.private_key, provider);
    const registryWithAgent = registry.connect(agentWallet);
    const usdcWithAgent = usdc.connect(agentWallet);
    
    // Check allowance
    const allowance = await usdc.allowance(agent.address, REGISTRY);
    console.log(`Current allowance: ${ethers.utils.formatUnits(allowance, 6)}`);
    
    if (allowance.lt(regFee)) {
      console.log('Approving USDC for registry...');
      const approveTx = await usdcWithAgent.approve(REGISTRY, ethers.utils.parseUnits('100', 6));
      console.log(`TX: ${approveTx.hash}`);
      await approveTx.wait();
      console.log('Approved ✅');
      await sleep(3000);
    }
    
    // Use simple short metadata URI (agent name only for now)
    const metadataUri = `agentmafia:${agent.name}`;
    
    // Register with manual gas limit
    console.log('Registering agent...');
    try {
      const regTx = await registryWithAgent.register(metadataUri, {
        gasLimit: 200000
      });
      console.log(`TX: ${regTx.hash}`);
      await regTx.wait();
      console.log(`${agent.name} registered! ✅`);
    } catch (err) {
      console.error(`Registration failed: ${err.message}`);
    }
    
    await sleep(3000);
  }
  
  // Final check
  console.log('\n=== Final Status ===');
  let totalRegistered = 0;
  for (const agent of agents) {
    const isRegistered = await registry.isAgent(agent.address);
    console.log(`${agent.name}: ${isRegistered ? '✅' : '❌'}`);
    if (isRegistered) totalRegistered++;
  }
  console.log(`\nTotal registered: ${totalRegistered}/${agents.length}`);
}

main().catch(console.error);
