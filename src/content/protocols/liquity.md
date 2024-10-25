---
protocol: "Liquity"
website: "https://www.liquity.org"
x: "https://x.com/LiquityProtocol"
github: "https://github.com/liquity"
defillama_slug: "liquity"
chain: "Ethereum"
stage: 2
risks: ["L", "L", "L", "L", "L"]
author: ["CookingCryptos"]
submission_date: "2024-10-23"
publish_date: "2024-10-23"
acknowledge_date: "1970-01-01"
update_date: "1970-01-01"
---

# Assessment

## Chain

This report covers the Liquity deployment on the Ethereum chain. Ethereum is considered fully decentralized according to this framework.

## Upgradeability

All contracts are fully immutable, with all permissions renounced to the zero address (0x0). This means no upgrades, changes, or modifications can be made to the protocol’s functionality or parameters. The immutability ensures that there is no risk of unwanted upgrades, censorship, or asset confiscation.

## Autonomy

Liquity relies on two external oracles, Chainlink (primary) and Tellor (fallback), but has a robust fallback mechanism in place, using the "last good price" if both oracles fail or become untrusted. This ensures the protocol can continue operating without interruption, minimizing the impact of oracle failure on its performance. Despite its reliance on external oracles, Liquity’s fallback systems reduce the risk of major disruptions or asset freezes.

## Exit Window

Liquity’s contracts are fully immutable, no upgrades or contract changes can occur after deployment, removing the need for an exit window.

## Accessibility

Multiple user-facing apps (frontends) exist and are operated by independent, third-party providers ensuring that users have access even if one frontend is discontinued. Moreover, the source code and deployment instructions are available on GitHub allowing users to easily “self-host” their own frontend.

A list of third-party frontends can be found here: [https://www.liquity.org/frontend#frontends](https://www.liquity.org/frontend#frontends)

# Technical Analysis

## Contracts

| ContractName          | Address                                    |
| --------------------- | ------------------------------------------ |
| activePool            | 0xDf9Eb223bAFBE5c5271415C75aeCD68C21fE3D7F |
| borrowerOperations    | 0x24179CD81c9e782A4096035f7eC97fB8B783e007 |
| troveManager          | 0xA39739EF8b0231DbFA0DcdA07d7e29faAbCf4bb2 |
| collSurplusPool       | 0x3D32e8b97Ed5881324241Cf03b2DA5E2EBcE5521 |
| communityIssuance     | 0xD8c9D9071123a059C6E0A945cF0e0c82b508d816 |
| defaultPool           | 0x896a3F03176f05CFbb4f006BfCd8723F2B0D741C |
| hintHelpers           | 0xE84251b93D9524E0d2e621Ba7dc7cb3579F997C0 |
| lockupContractFactory | 0x2eBeF24dA09489218Ba2BECb01867F6DaAeDcD4B |
| lqtyStaking           | 0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d |
| priceFeed             | 0x4c517D4e2C851CA76d7eC94B805269Df0f2201De |
| sortedTroves          | 0x8FdD3fbFEb32b28fb73555518f8b361bCeA741A6 |
| stabilityPool         | 0x66017D22b0f8556afDd19FC67041899Eb65a21bb |
| gasPool               | 0x9555b042F969E561855e5F28cB1230819149A8d9 |
| unipool               | 0xd37a77E71ddF3373a79BE2eBB76B6c4808bDF0d5 |
| lusdToken             | 0x5f98805A4E8be255a32880FDeC7F6728C6568bA0 |
| lqtyToken             | 0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D |
| multiTroveGetter      | 0xFc92d0E9Fa35df17E3A6d9F40716ca2cE749922B |
| uniToken              | 0xF20EF17b889b437C151eB5bA15A47bFc62bfF469 |
| Chanlink LUSD feed    | 0x3D7aE7E594f2f2091Ad8798313450130d0Aba3a0 |
| Tellor USD feed       | 0xAd430500ECDa11E38C9bCB08a702274b94641112 |

## Permission Owners

All external permissions are revoked, the protocol is immutable 🎉

## Permissions

| Contract              | Function            | Impact                                                                                                                                                                                                                                                                                                                                                 | Owner |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| ActivePool            | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: troveManager, borrowerOperations, stabilityPoolAddress and defaultPoolAddress.                                                                                        | 0x0   |
| BorrowerOperations    | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: activePool, collSurplusPool, lusdToken, troveManager, lqtyStaking, gasPoolAddress, lqtyStakingAddress, defaultPool, priceFeed, sortedTroves and stabilityPoolAddress. | 0x0   |
| TroveManager          | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: defaultPool, priceFeed, collSurplusPool, lqtyStaking, borrowerOperationsAddress, activePool, gasPoolAddress, lqtyToken, lusdToken, sortedTroves and stabilityPool.    | 0x0   |
| CollSurplusPool       | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: activePoolAddress, borrowerOperationsAddress, troveManagerAddress.                                                                                                    | 0x0   |
| CommunityIssuance     | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: lqtyToken, stabilityPoolAddress.                                                                                                                                      | 0x0   |
| DefaultPool           | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: troveManagerAddress, activePoolAddress.                                                                                                                               | 0x0   |
| HintHelpers           | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: troveManager, sortedTroves.                                                                                                                                           | 0x0   |
| LockupContractFactory | setLQTYTokenAddress | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: lqtyTokenAddress.                                                                                                                                                     | 0x0   |
| LQTYStaking           | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: lqtyToken, troveManagerAddress, borrowerOperationsAddress, activePoolAddress, lusdToken.                                                                              | 0x0   |
| PriceFeed             | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: priceAggregator, tellorCaller.                                                                                                                                        | 0x0   |
| SortedTroves          | setParams           | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: troveManager, borrowerOperationsAddress. And it allows to set the max size for data.                                                                                  | 0x0   |
| StabilityPool         | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: troveManager, borrowerOperations, activePool, lusdToken, sortedTroves, priceFeed and communityIssuance.                                                               | 0x0   |
| Unipool               | setAddresses        | The permissioned function allows the owner of the permission to set the following addresses in order to set relationships to co-dependent smart contracts of the Liquity system: lqtyToken and uniToken.                                                                                                                                               | 0x0   |

## Dependencies

The only external protocol dependency is an ETH/USD price feed (the Oracle) which is used to compute the value of users’ collateral when minting LUSD, redeeming LUSD or liquidating troves.

The system relies on two different oracles: Chainlink is the primary oracle and Tellor is the fallback oracle in case the chainlink price feed is frozen or untrusted. The Chainlink price feed is deployed at 0x3D7aE7E594f2f2091Ad8798313450130d0Aba3a0, the Tellor oracle is deployed at 0xAd430500ECDa11E38C9bCB08a702274b94641112.

If both Chainlink and Tellor are frozen or untrusted the last good price is used and the system keeps operating allowing users to withdraw their assets.

## Exit Window

The protocol is completely immutable, thus no exit window is required 🎉

# Security Council

The protocol is completely immutable, thus no Security Council is required 🎉
