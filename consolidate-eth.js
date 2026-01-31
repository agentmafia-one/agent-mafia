const ethers = require('ethers');
const fs = require('fs');
const path = require('path');

const RPC = 'https://base-mainnet.public.blastapi.io';
const NOVA = '0x8F22E723E88DEf071FD3d8Ed93b654956bcF05a0';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  
  const dir = '/home/ifc/clawd/projects/agent-mafia/sub-agents';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  
  console.log('Consolidating ETH to Nova...\n');
  
  for (const file of files) {
    const agent = JSON.parse(fs.readFileSync(path.join(dir, file)));
    const balance = await provider.getBalance(agent.address);
    
    // Only proceed if balance > 0.00005 ETH (enough to cover gas)
    const minBalance = ethers.utils.parseEther('0.00005');
    if (balance.gt(minBalance)) {
      const wallet = new ethers.Wallet(agent.private_key, provider);
      
      // Get current gas price
      const feeData = await provider.getFeeData();
      const gasLimit = 21000;
      const gasCost = feeData.maxFeePerGas.mul(gasLimit);
      
      const amountToSend = balance.sub(gasCost);
      
      if (amountToSend.gt(0)) {
        console.log(`${agent.name}: Sending ${ethers.utils.formatEther(amountToSend)} ETH to Nova`);
        
        const tx = await wallet.sendTransaction({
          to: NOVA,
          value: amountToSend,
          gasLimit: gasLimit
        });
        console.log(`TX: ${tx.hash}`);
        await tx.wait();
        console.log('✅ Sent');
        await sleep(2000);
      }
    } else {
      console.log(`${agent.name}: ${ethers.utils.formatEther(balance)} ETH (skipping, too low)`);
    }
  }
  
  const novaBalance = await provider.getBalance(NOVA);
  console.log(`\nNova final ETH: ${ethers.utils.formatEther(novaBalance)}`);
}

main().catch(console.error);
