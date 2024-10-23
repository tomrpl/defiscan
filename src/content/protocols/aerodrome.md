---
protocol: "Aerodrome"
website: "https://aerodrome.finance/"
x: "https://x.com/AerodromeFi"
github: "https://github.com/aerodrome-finance"
defillama_slug: "aerodrome-v1"
chain: "Base"
stage: 0
risks: "['H','M','L','H','L']"
author: "CookingCryptos, sagaciousyves"
submission_date: "2024-10-09"
publish_date: "2024-10-09"
acknowledge_date: "1970-01-01"
update_date: "1970-01-01"
---


# Assessment

## Chain

This report covers Aerodrome deployment on the Base mainnet. As Base is still evolving in terms of decentralization and governance, it does not yet meet the highest standard of decentralization (Stage 0 according to L2Beat).

## Upgradeability

The emergency council (multisig of ecosystem advocates, claimed to be credibly neutral) has a lot of control in the Aerodrome system through killing and reviving gauges. Each gauge is linked to a pool. Voters and LP both incentivized through the Aerodrome Flywheel are affected by a killed gauge which is linked to the deposited (LP) or voted (Voter) pool such that for the period in which the gauge was killed, the expected rewards stay out for this period. LPs and Voters need to allocate their capital and votes differently for the next period to profit from rewards.

## Autonomy

Aerodrome does not have external dependencies.

## Exit Window

Aerodrome protocol does not provide a sufficient exit window for users in case of an unwanted upgrade or contract change. Changes made by the governor or the emergency council, such as killing gauges, are enforced immediately after the related transaction is processed. This immediate enforcement leaves users with no window to exit or withdraw their assets before the change is applied.

## Accessibility

Aerodrome provides multiple access points for users, including both centralized interfaces ([aerodrome.finance](https://aerodrome.finance), [alt.aerodrome.finance](https://alt.aerodrome.finance)) and decentralized interfaces on IPFS ([aero.drome.eth](https://aero.drome.eth), [aero.drome.eth.limo](https://aero.drome.eth.limo), [aero.drome.eth.link](https://aero.drome.eth.link)). This diversity in user interfaces ensures redundancy, allowing users to access the protocol even if one interface becomes unavailable. 


# Technical Analysis

## Contracts

|            Contract Name           |                   Address                  |
|----------------------------------- |------------------------------------------- |
| AERO                               | 0x940181a94A35A4569E4529A3CDfB74e38FD98631 |
| AirdropDistributor                 | 0xE4c69af018B2EA9e575026c0472B6531A2bC382F |
| VeArtProxy                         | 0xE9992487b2EE03b7a91241695A58E0ef3654643E |
| FactoryRegistry                    | 0x5C3F18F06CC09CA1910767A34a20F771039E37C0 |
| Forwarder                          | 0x15e62707FCA7352fbE35F51a8D6b0F8066A05DCc |
| GaugeFactory                       | 0x35f35cA5B132CaDf2916BaB57639128eAC5bbcb5 |
| ManagedRewardsFactory              | 0xFdA1fb5A2a5B23638C7017950506a36dcFD2bDC3 |
| Minter                             | 0xeB018363F0a9Af8f91F06FEe6613a751b2A33FE5 |
| PoolFactory                        | 0x420DD381b31aEf6683db6B902084cB0FFECe40Da |
| RewardsDistributor                 | 0x227f65131A261548b057215bB1D5Ab2997964C7d |
| Router                             | 0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43 |
| Voter                              | 0x16613524e02ad97eDfeF371bC883F2F5d6C480A5 |
| VotingEscrow                       | 0xeBf418Fe2512e7E6bd9b87a8F0f294aCDC67e6B4 |
| VotingRewardsFactory               | 0x45cA74858C579E717ee29A86042E0d53B252B504 |
| CLGaugeFactory                     | 0xD30677bd8dd15132F251Cb54CbDA552d2A05Fb08 |
| CLGauge                            | 0xF5601F95708256A118EF5971820327F362442D2d |
| MixedRouteQuoterV1                 | 0x0A5aA5D3a4d28014f967Bf0f29EAA3FF9807D5c6 |
| NonfungiblePositionManager         | 0x827922686190790b37229fd06084350E74485b72 |
| NonfungibleTokenPositionDescriptor | 0x01b0CaCB9A8004e08D075c919B5dF3b59FD53c55 |
| CLFactory                          | 0x5e7BB104d84c7CB9B682AaC2F3d509f5F406809A |
| CLPool                             | 0xeC8E5342B19977B4eF8892e02D8DAEcfa1315831 |
| QuoterV2                           | 0x254cF9E1E6e233aa1AC962CB9B05b2cfeAaE15b0 |
| CustomSwapFeeModule                | 0xF4171B0953b52Fa55462E4d76ecA1845Db69af00 |
| CustomUnstakedFeeModule            | 0x0AD08370c76Ff426F534bb2AFFD9b5555338ee68 |
| UniversalRouter                    | 0x6Cb442acF35158D5eDa88fe602221b67B400Be3E |
| SwapRouter                         | 0xBE6D8f0d05cC4be24d5167a3eF062215bE6D18a5 |


## Permission Owners

| Name                                | Account                                                                                                                  | Type         |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------|--------------|
| Aerodrome Foundation and Incentives | [0xBDE0c70BdC242577c52dFAD53389F82fd149EA5a](https://etherscan.io/address/0xBDE0c70BdC242577c52dFAD53389F82fd149EA5a)    | Multisig 3/5 |
| Public Goods Fund                   | [0x834C0DA026d5F933C2c18Fa9F8Ba7f1f792fDa52 ](https://etherscan.io/address/0x834C0DA026d5F933C2c18Fa9F8Ba7f1f792fDa52)   | Multisig 3/5 |
| Emergency Council                    | [0x99249b10593fCa1Ae9DAE6D4819F1A6dae5C013D](https://etherscan.io/address/0x99249b10593fCa1Ae9DAE6D4819F1A6dae5C013D)    | Multisig 3/5 |
| Undeclared Multisig                 | [0xE6A41fE61E7a1996B59d508661e3f524d6A32075](https://etherscan.io/address/0xE6A41fE61E7a1996B59d508661e3f524d6A32075)    | Multisig 3/7 |


## Permissions

| Contract                        | Function                      | Impact                                                                                                           | Owner                                                       |
|---------------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| FactoryRegistry                 | renounceOwnership             | The function allows the permission owner to renounce ownership over all permissioned functions in this contract. | Undeclared Multisig                                         |
| FactoryRegistry                 | transferOwnership             | The function allows the permission owner to transfer ownership over all permissioned functions in this contract. | Undeclared Multisig                                         |
| FactoryRegistry                 | approve                       | This function allows the permission owner to approve a set of factories used in Velodrome Protocol.              | Undeclared Multisig                                         |
| FactoryRegistry                 | unapprove                     | This function allows the permission owner to unapprove a set of factories used in Velodrome Protocol.            | Undeclared Multisig                                         |
| FactoryRegistry                 | setManagedRewardsFactory      | This function allows the permission owner to set the rewards factory address.                                    | Undeclared Multisig                                         |
| Minter                          | nudge                         | Allows epoch governors to modify the tail emission rate by at most 1 basis point per epoch.                      | Undeclared Multisig                                         |
| PoolFactory                     | setVoter                      | Sets a new voter for the pool factory and will set it for all future pools.                                      | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| PoolFactory                     | setSinkConverter              | Sets a new sinkConverter for the pool factory for all future deployed pools.                                     | Contract: 0x585Af0b397AC42dbeF7f18395426BF878634f18D        |
| PoolFactory                     | setPauser                     | Sets a new Pauser for the pool factory for all future deployed pools.                                            | Undeclared Multisig                                         |
| PoolFactory                     | setPauseState                 | Sets the factory into paused or unpaused state.                                                                  | Undeclared Multisig                                         |
| PoolFactory                     | setFeeManager                 | Designates a new FeeManager.                                                                                     | Undeclared Multisig                                         |
| PoolFactory                     | setFee                        | Sets a new fee for all future deployed pools.                                                                    | Undeclared Multisig                                         |
| PoolFactory                     | setCustomFee                  | Sets a custom fee for a specific pool that was deployed through the factory.                                     | Undeclared Multisig                                         |
| SinkDrain                       | renounceOwnership             | The function allows the permission owner to renounce ownership over all permissioned functions in this contract. | 0x0 (renounced)                                             |
| SinkDrain                       | transferOwnership             | The function allows the permission owner to transfer ownership over all permissioned functions in this contract. | 0x0 (renounced)                                             |
| SinkDrain                       | mint                          | The function was used to mint to sinkManager so that it can provide all the liquidity.                           | 0x0 (renounced)                                             |
| SinkManager                     | renounceOwnership             | The function allows the permission owner to renounce ownership over all permissioned functions in this contract. | Undeclared Multisig                                         |
| SinkManager                     | transferOwnership             | The function allows the permission owner to transfer ownership over all permissioned functions in this contract. | Undeclared Multisig                                         |
| SinkManager                     | setOwnedTokenId               | Deposit all SinkDrain tokens to gauge to earn 100% rewards.                                                      | 0x0 (renounced)                                             |
| SinkManager                     | setupSinkDrain                | Initial setup of the ownedTokenId, the v1 veNFT which votes for the SinkDrain.                                   | 0x0 (renounced)                                             |
| VELO                            | setMinter                     | This function allows to set the minter for the V2 VELO token.                                                    | Minter contract: 0x6dc9E1C04eE59ed3531d73a72256C0da46D10982 |
| VELO                            | setSinkManager                | This function allows to set the SinkManager for the VELO V2 token.                                               | 0x0 (renounced)                                             |
| VELO                            | mint                          | The mint function allows the permission owner to mint new VELO V2 tokens into existence.                         | Minter contract: 0x6dc9E1C04eE59ed3531d73a72256C0da46D10982 |
| Voter                           | setGovernor                   | Sets a new governor.                                                                                             | Undeclared Multisig                                         |
| Voter                           | setEpochGovernor              | Sets a new epoch-based governor.                                                                                 | Undeclared Multisig                                         |
| Voter                           | setEmergencyCouncil           | Sets a new emergency council.                                                                                    | Emergency Council                                           |
| Voter                           | setMaxVotingNum               | Sets a new max voting number.                                                                                    | Undeclared Multisig                                         |
| Voter                           | whitelistToken                | Whitelists or unwhitelists a token for use in bribes.                                                            | Undeclared Multisig                                         |
| Voter                           | whitelistNFT                  | Whitelists or unwhitelists a token id for voting in the last hour prior to epoch flip.                           | Undeclared Multisig                                         |
| Voter                           | killGauge                     | Kills a gauge; gauge stops receiving emissions but users can still withdraw.                                     | Emergency Council                                           |
| Voter                           | reviveGauge                   | Revives a killed gauge, enabling it to receive emissions and deposits again.                                     | Emergency Council                                           |
| VotingEscrow                    | createManagedLockFor          | Creates a managed NFT for use within the ecosystem.                                                              | Undeclared Multisig                                         |
| VotingEscrow                    | depositManaged                | Delegates balance to managed NFT, re-locking NFTs to maximum lock time upon withdrawal.                          | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| VotingEscrow                    | withdrawManaged               | Withdraws balance from managed NFT, re-locking NFT to the maximum lock time.                                     | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| VotingEscrow                    | setAllowedManager             | Allows one address to call createManagedLockFor() that is not the governor.                                      | Undeclared Multisig                                         |
| VotingEscrow                    | setManagedState               | Sets Managed NFT state. Inactive NFTs cannot be deposited into.                                                  | Emergency Council                                           |
| VotingEscrow                    | setManagedState               | Sets Managed NFT state. Inactive NFTs cannot be deposited into.                                                  | Emergency Council  or governor (Undeclared Multisig)        |
| VotingEscrow                    | setVoterAndDistributor        | Sets Voter and distributor reference in this contract.                                                           | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| VotingEscrow                    | voting                        | Sets voted status for _tokenId to true or false.                                                                 | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| RestrictedTeam                  | setArtProxy                   | The function was used to mint to sinkManager so that it can provide all the liquidity.                           | Factory registry owner (Undeclared Multisig)                |
| Splitter                        | toggleSplit                   | Toggles split for a specific address or address(0) to enable/disable for all.                                    | Factory registry owner (Undeclared Multisig)                |
| Registry (RelayFactoryRegistry) | approve                       | Approves the given address.                                                                                      | Undeclared Multisig                                         |
| Registry (RelayFactoryRegistry) | unapprove                     | Revokes approval from the given address.                                                                         | Undeclared Multisig                                         |
| Registry (KeeperRegistry)       | approve                       | Approves the given address.                                                                                      | Undeclared Multisig                                         |
| Registry (KeeperRegistry)       | unapprove                     | Revokes approval from the given address.                                                                         | Undeclared Multisig                                         |
| Registry (OptimizerRegistry)    | approve                       | Approves the given address.                                                                                      | Undeclared Multisig                                         |
| Registry (OptimizerRegistry)    | unapprove                     | Revokes approval from the given address.                                                                         | Undeclared Multisig                                         |
| GaugeFactory (Slipstream)       | setNotifyAdmin                | Sets the notifyAdmin value on gauge factory.                                                                     | Undeclared Multisig                                         |
| GaugeFactory (Slipstream)       | setNonfungiblePositionManager | Sets Nonfungible Position Manager, callable only once.                                                           | 0x0 (renounced)                                             |
| GaugeFactory (Slipstream)       | createGauge                   | Allows the creation of a gauge, callable only by the voter contract.                                             | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| Gauge Implementation (CL Gauge) | getReward                     | Retrieves rewards for all tokens owned by an account.                                                            | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| Gauge Implementation (CL Gauge) | notifyRewardWithoutClaim      | Notifies gauge of gauge rewards without distributing fees.                                                       | Notify admin: Team Multisig                                 |
| Gauge Implementation (CL Gauge) | notifyRewardAmount            | Notifies gauge of gauge rewards.                                                                                 | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| NonfungiblePositionManager      | setTokenDescriptor            | Sets a new token descriptor.                                                                                     | Undeclared Multisig                                         |
| NonfungiblePositionManager      | setOwner                      | Sets a new owner.                                                                                                | Undeclared Multisig                                         |
| PoolFactory (Slipstream)        | setOwner                      | Sets a new owner for the pool factory.                                                                           | Undeclared Multisig                                         |
| PoolFactory (Slipstream)        | setSwapFeeManager             | Sets a new swap fee manager.                                                                                     | Undeclared Multisig                                         |
| PoolFactory (Slipstream)        | setUnstakedFeeManager         | Sets a new unstaked fee manager.                                                                                 | Undeclared Multisig                                         |
| PoolFactory (Slipstream)        | setSwapFeeModule              | Sets a new swap fee module.                                                                                      | Undeclared Multisig                                         |
| PoolFactory (Slipstream)        | setUnstakedFeeModule          | Updates the unstakedFeeModule of the factory.                                                                    | Undeclared Multisig                                         |
| PoolFactory (Slipstream)        | setDefaultUnstakedFee         | Updates the defaultUnstakedFee of the factory.                                                                   | Undeclared Multisig                                         |
| PoolFactory (Slipstream)        | enableTickSpacing             | Enables a specific tickSpacing for pools deployed from the factory.                                              | Undeclared Multisig                                         |
| CustomSwap                      | setCustomFee                  | Sets a custom fee between 0 and a max fee for a specific pool.                                                   | SwapFeeManager (Undeclared Multisig)                        |
| UnstakedFeeModule               | setCustomFee                  | Sets a custom fee between 0 and a max fee for a specified pool.                                                  | UnstakedFeeManager (Undeclared Multisig)                    |

## Dependencies

No external dependency has been found.


## Exit Window

No _timelocks_ or other form of exit window have been found. All upgrades take place immediately.

# Security Council

| ✅ /❌ | Requirement                                                                |
|------|----------------------------------------------------------------------------|
| ❌    | At least 7 signers                                                         |
| ✅    | At least 51% threshold                                                     |
| ❌    | At least 50% non-team signers                                              |
| ❌    | Signers are publicly announced (with name or pseudonym)                    |

[https://aerodrome.finance/security#emergency
](https://aerodrome.finance/security#emergency)
