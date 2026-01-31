// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/AgentRegistryV2.sol";
import "../src/BountyBoardV2.sol";

/**
 * @title DeployV2
 * @notice Deploy Agent Mafia v2 contracts with secure role separation
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 
 * 1. Set environment variables (on YOUR machine, not shared):
 *    export DEPLOYER_PRIVATE_KEY=0x...     # Temporary deployer (discard after)
 *    export TREASURY_ADDRESS=0x...          # Your hardware wallet address
 *    export OPERATOR_ADDRESS=0x...          # Hot wallet for daily ops
 * 
 * 2. Fund deployer with ~$20 ETH for gas
 * 
 * 3. Run deployment:
 *    forge script script/DeployV2.s.sol --rpc-url https://mainnet.base.org --broadcast
 * 
 * 4. IMPORTANT: After deployment, DELETE the deployer private key!
 *    The deployer has no special privileges - Treasury owns everything.
 */
contract DeployV2 is Script {
    
    // Base Mainnet USDC
    address constant USDC = 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913;
    
    function run() external {
        // Read from environment
        uint256 deployerKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address treasury = vm.envAddress("TREASURY_ADDRESS");
        address operator = vm.envAddress("OPERATOR_ADDRESS");
        
        require(treasury != address(0), "Set TREASURY_ADDRESS");
        require(operator != address(0), "Set OPERATOR_ADDRESS");
        
        console.log("=== Agent Mafia V2 Deployment ===");
        console.log("Treasury (owner):", treasury);
        console.log("Operator (limited):", operator);
        console.log("USDC:", USDC);
        console.log("");
        
        vm.startBroadcast(deployerKey);
        
        // Deploy Registry (Treasury = owner)
        AgentRegistryV2 registry = new AgentRegistryV2(
            USDC,
            treasury,
            operator
        );
        console.log("AgentRegistryV2:", address(registry));
        
        // Deploy BountyBoard (Treasury = owner)
        BountyBoardV2 bountyBoard = new BountyBoardV2(
            USDC,
            treasury,
            operator,
            address(registry)
        );
        console.log("BountyBoardV2:", address(bountyBoard));
        
        vm.stopBroadcast();
        
        console.log("");
        console.log("=== DEPLOYMENT COMPLETE ===");
        console.log("");
        console.log("IMPORTANT NEXT STEPS:");
        console.log("1. DELETE the deployer private key NOW");
        console.log("2. Fund operator wallet with ~$50 USDC for gas");
        console.log("3. Update frontend with new contract addresses");
        console.log("4. Test with small amounts first");
        console.log("");
        console.log("Treasury controls:");
        console.log("  - Withdraw fees");
        console.log("  - Change operator");
        console.log("  - Change settings");
        console.log("  - Emergency cancel");
        console.log("");
        console.log("Operator can (with $100/day limit):");
        console.log("  - Verify agents");
        console.log("  - Resolve small disputes");
        console.log("  - Update agent stats");
    }
}
