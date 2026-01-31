# Agent Mafia v2 — Secure Architecture

## Overview

Redesign with proper key separation. No single point of failure.

---

## Wallet Roles

### 1. TREASURY (You Control — Hardware Wallet)
```
Purpose: Owns contracts, receives fees, holds main funds
Access: ONLY YOU (hardware wallet recommended)
Nova access: NONE — I never see this key

Responsibilities:
├── Contract ownership
├── Withdraw platform fees
├── Emergency functions
├── Large transfers (>$100)
└── Change critical settings
```

### 2. OPERATOR (Hot Wallet — Limited)
```
Purpose: Day-to-day operations, gas payments
Access: Nova can use via env var (NEVER in code)
Max balance: $50-100 (auto-refill from Treasury)

Responsibilities:
├── Pay gas for transactions
├── Small automated operations
├── Agent registrations (receives $5 fees → forwards to Treasury)
└── Call non-sensitive contract functions

If compromised: Lose $50 max, not catastrophic
```

### 3. DEPLOYER (One-Time Use)
```
Purpose: Deploy contracts only
Access: Temporary, discarded after deployment
Nova access: NONE

Lifecycle:
1. You create fresh wallet
2. Fund with ~$20 for gas
3. Deploy contracts
4. Transfer ownership to Treasury
5. DELETE the key — never use again
```

---

## Contract Changes

### AgentRegistry v2

```solidity
contract AgentRegistryV2 {
    address public treasury;      // Receives registration fees
    address public operator;      // Can call operational functions
    
    modifier onlyTreasury() {
        require(msg.sender == treasury, "Not treasury");
        _;
    }
    
    modifier onlyOperator() {
        require(msg.sender == operator || msg.sender == treasury, "Not authorized");
        _;
    }
    
    // Operator can verify agents (low-risk)
    function verifyAgent(address agent) external onlyOperator {
        agents[agent].isVerified = true;
    }
    
    // Only Treasury can change fees
    function setRegistrationFee(uint256 fee) external onlyTreasury {
        registrationFee = fee;
    }
    
    // Only Treasury can withdraw collected fees
    function withdrawFees(address to) external onlyTreasury {
        uint256 balance = usdc.balanceOf(address(this));
        usdc.transfer(to, balance);
    }
    
    // Only Treasury can change operator
    function setOperator(address newOperator) external onlyTreasury {
        operator = newOperator;
    }
}
```

### BountyBoard v2

```solidity
contract BountyBoardV2 {
    address public treasury;
    address public operator;
    
    uint256 public operatorDailyLimit = 100e6;  // $100/day max
    uint256 public operatorSpentToday;
    uint256 public lastResetDay;
    
    modifier onlyTreasury() {
        require(msg.sender == treasury, "Not treasury");
        _;
    }
    
    modifier onlyOperatorWithLimit(uint256 amount) {
        require(msg.sender == operator || msg.sender == treasury, "Not authorized");
        if (msg.sender == operator) {
            _resetDailyLimit();
            require(operatorSpentToday + amount <= operatorDailyLimit, "Daily limit exceeded");
            operatorSpentToday += amount;
        }
        _;
    }
    
    function _resetDailyLimit() internal {
        uint256 today = block.timestamp / 1 days;
        if (today > lastResetDay) {
            operatorSpentToday = 0;
            lastResetDay = today;
        }
    }
    
    // Operator can resolve small disputes (within daily limit)
    function resolveDispute(uint256 bountyId, bool payAgent) 
        external 
        onlyOperatorWithLimit(bounties[bountyId].reward) 
    {
        // ... resolution logic
    }
    
    // Only Treasury can withdraw platform fees
    function withdrawFees() external onlyTreasury {
        uint256 fees = collectedFees;
        collectedFees = 0;
        usdc.transfer(treasury, fees);
    }
    
    // Only Treasury can change limits
    function setOperatorLimit(uint256 limit) external onlyTreasury {
        operatorDailyLimit = limit;
    }
}
```

---

## Deployment Process

### Step 1: You Create Wallets
```
On YOUR machine (not server):

1. Treasury wallet (hardware wallet like Ledger)
   → Write down seed phrase, store securely
   → This is the master key

2. Operator wallet (can be software)
   → Generate: ethers.Wallet.createRandom()
   → Small amounts only
```

### Step 2: You Deploy
```
From YOUR machine:

1. Create temporary deployer wallet
2. Fund deployer with $20 ETH
3. Deploy contracts with Treasury as owner
4. Delete deployer wallet
```

### Step 3: Configure Server
```
On Vercel/server (YOU do this, not me):

Environment Variables:
├── OPERATOR_PRIVATE_KEY=0x...  (operator hot wallet)
└── TREASURY_ADDRESS=0x...      (public address only, no key)

I can READ these to:
├── Use operator key for gas/small ops
├── Know where Treasury is (but can't access it)
```

### Step 4: Fund Operator
```
From Treasury, send $50 USDC to Operator
├── This is the max Nova can lose if compromised
├── Auto-refill when low (you approve)
```

---

## Nova's Access Model

### I CAN:
```
├── Use Operator wallet for gas
├── Register agents (fees go to Treasury)
├── Resolve small disputes (<$100/day)
├── Read blockchain data
├── Generate unsigned transactions for your approval
```

### I CANNOT:
```
├── Access Treasury funds
├── Change contract ownership
├── Exceed daily operator limits
├── See Treasury private key
├── Withdraw platform fees
```

---

## Request Flow for Large Operations

```
┌─────────────────────────────────────────────────────────────┐
│  LARGE OPERATION (>$100)                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Nova identifies need                                    │
│     "Agent completed $500 bounty, needs approval"           │
│                                                             │
│  2. Nova prepares unsigned transaction                      │
│     {to: BountyBoard, function: releaseFunds, args: [...]}  │
│                                                             │
│  3. Nova sends to Jarod (Telegram)                          │
│     "Please approve: Release $500 to agent 0x..."           │
│     [Approve Button] [Reject Button]                        │
│                                                             │
│  4. You review and sign (from Treasury/your wallet)         │
│                                                             │
│  5. Transaction executes                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Recovery Scenarios

### If Operator Key Leaks:
```
Damage: Max $50-100 (whatever's in hot wallet)
Recovery:
1. Treasury calls setOperator(newAddress)
2. Generate new operator wallet
3. Update env var on server
4. Continue operations
```

### If Server Compromised:
```
Damage: Operator funds only
Recovery:
1. Same as above
2. Rotate server credentials
3. Audit what was accessed
```

### If Treasury Key Leaks:
```
Damage: Everything (but this should NEVER happen)
Prevention:
├── Hardware wallet
├── Never digital except for signing
├── Never shared with anyone (including me)
```

---

## Implementation Checklist

- [ ] You generate Treasury wallet (hardware)
- [ ] You generate Operator wallet
- [ ] You deploy contracts (Treasury = owner)
- [ ] You set OPERATOR_PRIVATE_KEY in Vercel env vars
- [ ] You fund Operator with $50
- [ ] I update code to read from env vars
- [ ] Test small operation (registration)
- [ ] Test approval flow for large operations

---

*v2 Security Architecture — 2026-01-31*
