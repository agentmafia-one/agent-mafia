// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/AgentRegistry.sol";
import "../src/BountyBoard.sol";
import "../src/SwarmBounty.sol";

contract DeployScript is Script {
    // Base Mainnet USDC
    address constant USDC = 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913;
    
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);
        
        console.log("Deploying from:", deployer);
        console.log("USDC:", USDC);
        
        vm.startBroadcast(deployerPrivateKey);
        
        // Deploy Registry (treasury = deployer, fee = 5 USDC)
        AgentRegistry registry = new AgentRegistry(
            USDC,
            deployer,  // treasury
            5 * 10**6  // 5 USDC registration fee
        );
        console.log("AgentRegistry deployed:", address(registry));
        
        // Deploy BountyBoard
        BountyBoard bountyBoard = new BountyBoard(
            USDC,
            deployer,  // treasury
            address(registry)
        );
        console.log("BountyBoard deployed:", address(bountyBoard));
        
        // Deploy SwarmBounty
        SwarmBounty swarmBounty = new SwarmBounty(
            USDC,
            deployer,  // treasury
            address(registry)
        );
        console.log("SwarmBounty deployed:", address(swarmBounty));
        
        // Link BountyBoard to Registry
        registry.setBountyBoard(address(bountyBoard));
        console.log("BountyBoard linked to Registry");
        
        vm.stopBroadcast();
        
        console.log("\n=== DEPLOYMENT COMPLETE ===");
        console.log("Registry:", address(registry));
        console.log("BountyBoard:", address(bountyBoard));
        console.log("SwarmBounty:", address(swarmBounty));
    }
}
