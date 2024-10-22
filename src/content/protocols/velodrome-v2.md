---
protocol: "Velodrome-v2"
website: "https://velodrome.finance/"
x: "https://twitter.com/VelodromeFi"
github: "https://github.com/velodrome-finance"
defillama_slug: "velodrome-v2"
chain: "Optimism"
stage: 1
risks: "['M','M','L','H','L']"
author: "CookingCryptos, sagaciousyves"
date: "2024-10-09"
---


# Assessment

## Chain

This report covers the Velodrome v2 deployment on the Optimism mainnet. As Optimism is still evolving in terms of decentralization and governance, it does not yet meet the highest standard of decentralization (Stage 1 according to L2Beat).

## Upgradeability

The emergency council (multisig of ecosystem advocates, claimed to be credibly neutral) has a lot of control in the Velodrome system through killing and reviving gauges. Each gauge is linked to a pool. Voters and LP both incentivized through the Velodrome Flywheel are affected by a killed gauge which is linked to the deposited (LP) or voted (Voter) pool such that for the period in which the gauge was killed, the unclaimed rewards for this period are effectively lost. LPs and Voters need to re-allocate their capital and votes to earn rewards in the next period again.

## Autonomy

Velodrome v2 does not have external dependencies.

## Exit Window

Control over permissioned functions is assigned to a compliant Security Council without an enforced exit window.

## Accessibility

Velodrome provides several access points to the protocol, both decentralized and centralized. Decentralized links include [velo.drome.eth](https://velo.drome.eth), [velo.drome.eth.limo](https://velo.drome.eth.limo), and [velo.drome.eth.link](https://velo.drome.eth.link), while centralized options include [velodrome.finance](https://velodrome.finance) and [alt.velodrome.finance](https://alt.velodrome.finance). This diversity of user interfaces offers redundancy and reduces risks associated with access issues. 

# Technical Analysis

## Contracts

| Contract Name                          | Address                                    |
|----------------------------------------|--------------------------------------------|
| ArtProxy                               | 0x4A9eA0dd5649eC4B6745c60d1769e2184C1782DD |
| Distributor                            | 0x9D4736EC60715e71aFe72973f7885DCBC21EA99b |
| FactoryRegistry                        | 0xF4c67CdEAaB8360370F41514d06e32CcD8aA1d7B |
| Forwarder                              | 0x06824df38D1D77eADEB6baFCB03904E27429Ab74 |
| GaugeFactory                           | 0x8391fE399640E7228A059f8Fa104b8a7B4835071 |
| GaugeSinkDrain                         | 0x987E7922367B23C4A5fa34C8C5B1385174A095d6 |
| ManagedRewardsFactory                  | 0xcDd9585005095ac7447d1fDbC990C5CFB805cff0 |
| Minter                                 | 0x6dc9E1C04eE59ed3531d73a72256C0da46D10982 |
| PoolFactory                            | 0xF1046053aa5682b4F9a81b5481394DA16BE5FF5a |
| Router                                 | 0xa062aE8A9c5e11aaA026fc2670B0D65cCc8B2858 |
| SinkConverter                          | 0x585Af0b397AC42dbeF7f18395426BF878634f18D |
| SinkDrain                              | 0xda03Dc399aF3F1545748243aAFbC5050A63B17eC |
| SinkManager                            | 0x5aeE5F0E6C2055EbD776DB25F48f6c9A68ABcdaE |
| SinkManagerFacilitator                 | 0x45fF00822E8235b86Cb605ac8295c14628cE78a4 |
| VELO                                   | 0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db |
| Voter                                  | 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C |
| VotingEscrow                           | 0xFAf8FD17D9840595845582fCB047DF13f006787d |
| VotingRewardsFactory                   | 0x756E7C245C69d351FfFBfb88bA234aa395AdA8ec |
| Restricted Team                        | 0x0a16cB36b553ba2bB2339f3B206A965E9841d305 |
| Splitter                               | 0x6666B2dF7A328Cf775778Ebad368F5f13e39eC4C |
| ManagedRewardsFactory (patched)        | 0x3F468e35f5c262a6E796bfe3be831Bf8b9142e9c |
| RelayFactoryRegistry (called Registry) | 0x6b1253B116B5919932399295C75116d33F8EfF96 |
| KeeperRegistry (called Registry)       | 0x7bC95b327DF9d6dE05C1A02F6D252986Fcf45AF7 |
| OptimizerRegistry                      | 0x7feF5407eD6C83f78eF82B3389FF89019095266B |
| GaugeFactory (Slipstream)              | 0x327147eE440252b893A771345025B41A267Ad985 |
| GaugeImplementation                    | 0x7155b84A704F0657975827c65Ff6fe42e3A962bb |
| MixedQuoter                            | 0xFF79ec912bA114FD7989b9A2b90C65f0c1b44722 |
| NonfungiblePositionManager             | 0x416b433906b1B72FA758e166e239c43d68dC6F29 |
| NonfungibleTokenPositionDescriptor     | 0xccDf417f49a14bC2b23c71684de0304C56DEA165 |
| PoolFactory                            | 0xCc0bDDB707055e04e497aB22a59c2aF4391cd12F |
| PoolImplementation                     | 0xc28aD28853A547556780BEBF7847628501A3bCbb |
| Quoter                                 | 0x89D8218ed5fF1e46d8dcd33fb0bbeE3be1621466 |
| SwapFeeModule                          | 0x7361E9079920fb75496E9764A2665d8ee5049D5f |
| UnstakedFeeModule                      | 0xC565F7ba9c56b157Da983c4Db30e13F5f06C59D9 |
| UniversalRouter                        | 0x4bF3E32de155359D1D75e8B474b66848221142fc |
| SwapRouter                             | 0x0792a633F0c19c351081CF4B211F68F79bCc9676 |
| Prices Oracle                          | 0x07F544813E9Fb63D57a92f28FbD3FF0f7136F5cE |
| SlipstreamHelper                       | 0x495193DaebdE03E12857f4d3BB8984da2d447a69 |
| LP Migrator                            | 0x3Fdb481B25b24824A2339a4A1AbD0B0BC7534e71 |


## Permission Owners

| Name              | Account                                                                                                               | Type         |
|-------------------|-----------------------------------------------------------------------------------------------------------------------|--------------|
| Team Multisig     | [0xBA4BB89f4d1E66AA86B60696534892aE0cCf91F5](https://etherscan.io/address/0xBA4BB89f4d1E66AA86B60696534892aE0cCf91F5) | Multisig 3/7 |
| Emergency Council | [0x838352F4E3992187a33a04826273dB3992Ee2b3f](https://etherscan.io/address/0x838352F4E3992187a33a04826273dB3992Ee2b3f) |      Multisig 4/7        |

## Permissions

| Contract                        | Function                      | Impact                                                                                                           | Owner                                                       |
|---------------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| FactoryRegistry                 | renounceOwnership             | The function allows the permission owner to renounce ownership over all permissioned functions in this contract. | Team Multisig                                               |
| FactoryRegistry                 | transferOwnership             | The function allows the permission owner to transfer ownership over all permissioned functions in this contract. | Team Multisig                                               |
| FactoryRegistry                 | approve                       | This function allows the permission owner to approve a set of factories used in Velodrome Protocol.              | Team Multisig                                               |
| FactoryRegistry                 | unapprove                     | This function allows the permission owner to unapprove a set of factories used in Velodrome Protocol.            | Team Multisig                                               |
| FactoryRegistry                 | setManagedRewardsFactory      | This function allows the permission owner to set the rewards factory address.                                    | Team Multisig                                               |
| Minter                          | nudge                         | Allows epoch governors to modify the tail emission rate by at most 1 basis point per epoch.                      | Team Multisig                                               |
| PoolFactory                     | setVoter                      | Sets a new voter for the pool factory and will set it for all future pools.                                      | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| PoolFactory                     | setSinkConverter              | Sets a new sinkConverter for the pool factory for all future deployed pools.                                     | Contract: 0x585Af0b397AC42dbeF7f18395426BF878634f18D        |
| PoolFactory                     | setPauser                     | Sets a new Pauser for the pool factory for all future deployed pools.                                            | Team Multisig                                               |
| PoolFactory                     | setPauseState                 | Sets the factory into paused or unpaused state.                                                                  | Team Multisig                                               |
| PoolFactory                     | setFeeManager                 | Designates a new FeeManager.                                                                                     | Team Multisig                                               |
| PoolFactory                     | setFee                        | Sets a new fee for all future deployed pools.                                                                    | Team Multisig                                               |
| PoolFactory                     | setCustomFee                  | Sets a custom fee for a specific pool that was deployed through the factory.                                     | Team Multisig                                               |
| SinkDrain                       | renounceOwnership             | The function allows the permission owner to renounce ownership over all permissioned functions in this contract. | 0x0 (renounced)                                             |
| SinkDrain                       | transferOwnership             | The function allows the permission owner to transfer ownership over all permissioned functions in this contract. | 0x0 (renounced)                                             |
| SinkDrain                       | mint                          | The function was used to mint to sinkManager so that it can provide all the liquidity.                           | 0x0 (renounced)                                             |
| SinkManager                     | renounceOwnership             | The function allows the permission owner to renounce ownership over all permissioned functions in this contract. | Team Multisig                                               |
| SinkManager                     | transferOwnership             | The function allows the permission owner to transfer ownership over all permissioned functions in this contract. | Team Multisig                                               |
| SinkManager                     | setOwnedTokenId               | Deposit all SinkDrain tokens to gauge to earn 100% rewards.                                                      | 0x0 (renounced)                                             |
| SinkManager                     | setupSinkDrain                | Initial setup of the ownedTokenId, the v1 veNFT which votes for the SinkDrain.                                   | 0x0 (renounced)                                             |
| VELO                            | setMinter                     | This function allows to set the minter for the V2 VELO token.                                                    | Minter contract: 0x6dc9E1C04eE59ed3531d73a72256C0da46D10982 |
| VELO                            | setSinkManager                | This function allows to set the SinkManager for the VELO V2 token.                                               | 0x0 (renounced)                                             |
| VELO                            | mint                          | The mint function allows the permission owner to mint new VELO V2 tokens into existence.                         | Minter contract: 0x6dc9E1C04eE59ed3531d73a72256C0da46D10982 |
| Voter                           | setGovernor                   | Sets a new governor.                                                                                             | Team Multisig                                               |
| Voter                           | setEpochGovernor              | Sets a new epoch-based governor.                                                                                 | Team Multisig                                               |
| Voter                           | setEmergencyCouncil           | Sets a new emergency council.                                                                                    | Emergency Council                                           |
| Voter                           | setMaxVotingNum               | Sets a new max voting number.                                                                                    | Team Multisig                                               |
| Voter                           | whitelistToken                | Whitelists or unwhitelists a token for use in bribes.                                                            | Team Multisig                                               |
| Voter                           | whitelistNFT                  | Whitelists or unwhitelists a token id for voting in the last hour prior to epoch flip.                           | Team Multisig                                               |
| Voter                           | killGauge                     | Kills a gauge; gauge stops receiving emissions but users can still withdraw.                                     | Emergency Council                                           |
| Voter                           | reviveGauge                   | Revives a killed gauge, enabling it to receive emissions and deposits again.                                     | Emergency Council                                           |
| VotingEscrow                    | createManagedLockFor          | Creates a managed NFT for use within the ecosystem.                                                              | Team Multisig                                               |
| VotingEscrow                    | depositManaged                | Delegates balance to managed NFT, re-locking NFTs to maximum lock time upon withdrawal.                          | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| VotingEscrow                    | withdrawManaged               | Withdraws balance from managed NFT, re-locking NFT to the maximum lock time.                                     | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| VotingEscrow                    | setAllowedManager             | Allows one address to call createManagedLockFor() that is not the governor.                                      | Team Multisig                                               |
| VotingEscrow                    | setManagedState               | Sets Managed NFT state. Inactive NFTs cannot be deposited into.                                                  | Emergency Council                                           |
| VotingEscrow                    | setManagedState               | Sets Managed NFT state. Inactive NFTs cannot be deposited into.                                                  | Emergency Council  or governor (Team Multisig)              |
| VotingEscrow                    | setVoterAndDistributor        | Sets Voter and distributor reference in this contract.                                                           | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| VotingEscrow                    | voting                        | Sets voted status for _tokenId to true or false.                                                                 | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| RestrictedTeam                  | setArtProxy                   | The function was used to mint to sinkManager so that it can provide all the liquidity.                           | Factory registry owner (Team Multisig)                      |
| Splitter                        | toggleSplit                   | Toggles split for a specific address or address(0) to enable/disable for all.                                    | Factory registry owner (Team Multisig)                      |
| Registry (RelayFactoryRegistry) | approve                       | Approves the given address.                                                                                      | Team Multisig                                               |
| Registry (RelayFactoryRegistry) | unapprove                     | Revokes approval from the given address.                                                                         | Team Multisig                                               |
| Registry (KeeperRegistry)       | approve                       | Approves the given address.                                                                                      | Team Multisig                                               |
| Registry (KeeperRegistry)       | unapprove                     | Revokes approval from the given address.                                                                         | Team Multisig                                               |
| Registry (OptimizerRegistry)    | approve                       | Approves the given address.                                                                                      | Team Multisig                                               |
| Registry (OptimizerRegistry)    | unapprove                     | Revokes approval from the given address.                                                                         | Team Multisig                                               |
| GaugeFactory (Slipstream)       | setNotifyAdmin                | Sets the notifyAdmin value on gauge factory.                                                                     | Team Multisig                                               |
| GaugeFactory (Slipstream)       | setNonfungiblePositionManager | Sets Nonfungible Position Manager, callable only once.                                                           | 0x0 (renounced)                                             |
| GaugeFactory (Slipstream)       | createGauge                   | Allows the creation of a gauge, callable only by the voter contract.                                             | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| Gauge Implementation (CL Gauge) | getReward                     | Retrieves rewards for all tokens owned by an account.                                                            | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| Gauge Implementation (CL Gauge) | notifyRewardWithoutClaim      | Notifies gauge of gauge rewards without distributing fees.                                                       | Notify admin: Team Multisig                                 |
| Gauge Implementation (CL Gauge) | notifyRewardAmount            | Notifies gauge of gauge rewards.                                                                                 | Voter contract: 0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C  |
| NonfungiblePositionManager      | setTokenDescriptor            | Sets a new token descriptor.                                                                                     | Team Multisig                                               |
| NonfungiblePositionManager      | setOwner                      | Sets a new owner.                                                                                                | Team Multisig                                               |
| PoolFactory (Slipstream)        | setOwner                      | Sets a new owner for the pool factory.                                                                           | Team Multisig                                               |
| PoolFactory (Slipstream)        | setSwapFeeManager             | Sets a new swap fee manager.                                                                                     | Team Multisig                                               |
| PoolFactory (Slipstream)        | setUnstakedFeeManager         | Sets a new unstaked fee manager.                                                                                 | Team Multisig                                               |
| PoolFactory (Slipstream)        | setSwapFeeModule              | Sets a new swap fee module.                                                                                      | Team Multisig                                               |
| PoolFactory (Slipstream)        | setUnstakedFeeModule          | Updates the unstakedFeeModule of the factory.                                                                    | Team Multisig                                               |
| PoolFactory (Slipstream)        | setDefaultUnstakedFee         | Updates the defaultUnstakedFee of the factory.                                                                   | Team Multisig                                               |
| PoolFactory (Slipstream)        | enableTickSpacing             | Enables a specific tickSpacing for pools deployed from the factory.                                              | Team Multisig                                               |
| CustomSwap                      | setCustomFee                  | Sets a custom fee between 0 and a max fee for a specific pool.                                                   | SwapFeeManager (Team Multisig)                              |
| UnstakedFeeModule               | setCustomFee                  | Sets a custom fee between 0 and a max fee for a specified pool.                                                  | UnstakedFeeManager (Team Multisig)                          |


## Dependencies

No external dependency has been found.

## Exit Window

No time-locks have been found. All upgrades take place immediately.


# Security Council

| ✅ /❌ | Requirement                                                                |
|------|----------------------------------------------------------------------------|
| ❌    | At least 7 signers                                                         |
| ❌    | At least 51% threshold                                                     |
| ❌    | At least 50% non-team signers                                              |
| ❌    | Signers are publicly announced (with name or pseudonym)                    |