---
protocol: "PoolTogether-v5"
website: "https://pooltogether.com/fr"
x: "https://twitter.com/PoolTogether_"
github: "https://github.com/pooltogether"
defillama_slug: "pooltogether-v5"
chain: "Ethereum"
stage: 2
risks: ["L", "L", "L", "L", "L"]
author: ["CookingCryptos", "sagaciousyves"]
submission_date: "2024-10-23"
publish_date: "2024-10-23"
acknowledge_date: "1970-01-01"
update_date: "1970-01-01"
---

# Assessment

## Chain

This report covers the PoolTogether V5 deployment on the Ethereum chain. Ethereum is considered fully decentralized according to this framework.

## Upgradeability

Permissions in the PoolTogether V5 protocol are fully revoked, the protocol is immutable 🎉

Note that anyone can create a new `PrizeVault` and link it to various, third-party yield sources and utility contracts. An attacker could deploy malicious yield sources or utility contracts (e.g., `LiquidationPair` or `Claimer`) through which users' funds or prizes could be lost or stolen. However, assessing these risks and possible mitigation measures is outside of the scope of the DeFiScan framework.

As a result, the protocol earns an Upgradeability score of Low.

## Autonomy

The protocol relies on the Witnet Oracle for randomness in prize draws. If the oracle fails, a new PrizePool and DrawManager must be deployed, though users can still withdraw their deposits and accrued prices without interruption.

The protocol's Autonomy score thus is Low.

## Exit Window

PoolTogether's contracts are fully immutable, no upgrades or contract changes can occur after deployment, removing the need for an exit window.

## Accessibility

PoolTogether provides access to the protocol through multiple independent interfaces such as [app.cabana.fi](https://app.cabana.fi) and [pooltime.app](https://pooltime.app), ensuring that users can still interact with the protocol even if one interface is unavailable. This diversity in access points helps minimize risks related to interface outages or downtime, offering more flexibility for users.

# Technical Analysis

## Contracts

| Contract Name                                          | Address                                                                                |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| POOL (Token)                                           | 0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e                                             |
| POOL Prize Vault (V5)                                  | 0x9eE31E845fF1358Bf6B1F914d3918c6223c75573                                             |
| RngWitnet                                              | 0xf93329e78feff1145fce03a79d5b356588dea215                                             |
| TwabController                                         | 0x4d5f2cd31701f3e5de77b3f89ee7b80eb87b4acc                                             |
| TwabRewards                                            | 0x2589ff8614f74704741ee3b51851b4ae812f1a21                                             |
| TpdaLiquidationPairFactory                             | 0xa99b3a8503260ab32753c382eac297acd4a43908                                             |
| TpdaLiquidationRouter                                  | 0x7c210be12bcef8090610914189a0de43e2192ea0                                             |
| PrizeVaultFactory                                      | 0xd499CcF3e93F4cfb335Ac388E3C896D59cdDe7c3                                             |
| PrizePool                                              | 0x7865d01da4c9ba2f69b7879e6d2483ab6b354d95                                             |
| ClaimerFactory                                         | 0xd84C4c7675e6Eb79eA28D04C001e702cCC679E80                                             |
| Claimer                                                | 0x98CC81798954c35c39b960DfcA3d8b170154aa7e, 0x54aa02cbc223Fc834949FB1fd8C855e4dA126c7D |
| StakingVault (underlying ERC4626 for POOL Prize Vault) | 0x68a100a3729fc04ab26fb4c0862df22ceec2f18b                                             |
| DrawManager                                            | 0x98305eb9a29d45ec93ce44ba02b315b631c675a7                                             |

## Permission Owners

All external permissions are revoked, the protocol is immutable 🎉

## Permissions

| Contract              | Function                  | Impact                                                                                                                                                       | Owner                                                          |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| POOL                  | setMinter                 | The owner of the permission to call setMinter can appoint a new minter. As the name suggests, the minter is allowed to call mint and designate a new minter. | 0x0 (renounced)                                                |
| POOL                  | mint                      | The owner of the permission is allowed to mint new Pool tokens into existence.                                                                               | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | renounceOwnership         | Disables access to permissioned functions for everyone, freezing the parameters to their current values.                                                     | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | transferOwnership         | Allows assigning an address to \_pendingOwner. This address needs to call claimOwnership to become the owner.                                                | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | claimOwnership            | Can only be called by the address equivalent to the value stored at \_pendingOwner.                                                                          | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | depositWithPermit         | Deposit into the Vault and mint Vault shares using permit to approve the underlying asset.                                                                   | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | setClaimer                | Sets a claimer contract for this prize vault, allowing automated bots to claim prizes on behalf of winners.                                                  | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | setLiquidationPair        | Sets the Liquidation Pair, responsible for auctioning yield for the prize token using a TPDA auction method.                                                 | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | setYieldFeePercentage     | Sets the yield fee percentage, which is immutably set to 0.                                                                                                  | 0x0 (renounced)                                                |
| POOL Prize Vault (V5) | setYieldFeeRecipient      | Sets the recipient for the yield fee, which is immutably set to the 0-address.                                                                               | 0x0 (renounced)                                                |
| TwabRewards           | endPromotion              | Allows the creator of a promotion to end the promotion.                                                                                                      | Creator address                                                |
| TwabRewards           | destroyPromotion          | Allows the creator of a promotion to destroy the promotion.                                                                                                  | Creator address                                                |
| PrizePool             | setDrawManager            | Allows the creator to set the DrawManager contract once.                                                                                                     | 0xc516fe1fee5122d66e9427721a63d6c27e1201ca                     |
| PrizePool             | allocateRewardFromReserve | Allows the DrawManager to allocate a reward from the reserve to a recipient.                                                                                 | DrawManager contract0x98305eb9a29D45eC93CE44bA02B315B631c675a7 |
| PrizePool             | awardDraw                 | Allows the Manager to award a draw with the winning random number.                                                                                           | DrawManager contract0x98305eb9a29D45eC93CE44bA02B315B631c675a7 |

## Dependencies

### Randomness Oracle (RngWitnet)

Pooltogether needs randomness to make drawings who should win the yield accrued from all the prize vaults. PoolTogether uses Witnet Oracle for randomness. The oracle endpoint on Ethereum Mainnet is deployed to the address 0xC0FFEE98AD1434aCbDB894BbB752e138c1006fAB. This address has an EOA as owner. The owner is allowed to transfer the ownership, renounce the ownership, set baseFee and change Witnet Service Level Agreement (Number of nodes in the Witnet blockchain that will take part in solving the data request and fees for each node resolving the request).
The oracle endpoint is referenced in the RngWitnet contract without any way to change (address is immutable). RngWitnet is immutably referenced inside the DrawManager. In case of oracle failure, a new DrawManager is needed to be deployed, as well as a new PrizePool and thus a whole new iteration of the PoolTogether protocol. However, claiming prizes and withdraw principal from pools is not affected from a frozen oracle. For claiming prizes a fallback function called withdrawShutdownBalance exists, where for each account and vault the prize money can be withdrawn proportional to the saved tokens and duration in a vault.

### Underlying yield source (linked ERC4626 in a Prize Vault)

In normal conditions depositors should always expect to be able to withdraw their full deposit amount and no more as long as global withdrawal limits meet or exceed their balance. However, since the protocol is fully permissionless everyone can create a new prize vault and link yield source and utility contracts to it. The yield source and the utility contracts like LiquidationPair or Claimer can be implemented with malicious intent, stealing underlying principal or stealing prize. However, a malicious vault doesn’t affect other vaults nor the protocol in general.

## Exit Window

The protocol is completely immutable, thus no exit window is required 🎉

# Security Council

The protocol is completely immutable, thus no Security Council is required 🎉
