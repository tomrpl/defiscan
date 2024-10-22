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
date: "2024-10-09"
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
| ArtProxy                           | 0xE9992487b2EE03b7a91241695A58E0ef3654643E |
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
| GaugeImplementation                | 0xF5601F95708256A118EF5971820327F362442D2d |
| MixedQuoter                        | 0x0A5aA5D3a4d28014f967Bf0f29EAA3FF9807D5c6 |
| NonfungiblePositionManager         | 0x827922686190790b37229fd06084350E74485b72 |
| NonfungibleTokenPositionDescriptor | 0x01b0CaCB9A8004e08D075c919B5dF3b59FD53c55 |
| PoolFactory                        | 0x5e7BB104d84c7CB9B682AaC2F3d509f5F406809A |
| PoolImplementation                 | 0xeC8E5342B19977B4eF8892e02D8DAEcfa1315831 |
| Quoter                             | 0x254cF9E1E6e233aa1AC962CB9B05b2cfeAaE15b0 |
| SwapFeeModule                      | 0xF4171B0953b52Fa55462E4d76ecA1845Db69af00 |
| UnstakedFeeModule                  | 0x0AD08370c76Ff426F534bb2AFFD9b5555338ee68 |
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

| Contract                   | Function                 | Impact                                                                                    | Owner                                                                                                                                     |
| -------------------------- | ------------------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| AERO                       | setMinter                | Sets the minter for the AERO token.                                                       | Minter contract 0xeB018363F0a9Af8f91F06FEe6613a751b2A33FE5 (immutable)                                                                    |
| AERO                       | mint                     | Allows the permission owner to mint new AERO tokens into existence.                       | Minter contract 0xeB018363F0a9Af8f91F06FEe6613a751b2A33FE5                                                                                |
| AirdropDistributor         | renounceOwnership        | Renounces the ownership and disables all functions gated by onlyOwner modifier.           | 0x0 (renounced)                                                                                                                           |
| AirdropDistributor         | transferOwnership        | Transfers ownership to another address that is not the 0-address.                         | 0x0 (renounced)                                                                                                                           |
| AirdropDistributor         | distributeTokens         | Distributes permanently locked NFTs to the desired addresses (airdrop).                   | 0x0 (renounced)                                                                                                                           |
| FactoryRegistry            | renounceOwnership        | Renounces ownership and disables all functions gated by onlyOwner modifier.               | Undeclared Multisig                                                                                       |
| FactoryRegistry            | transferOwnership        | Transfers ownership to another address that is not the 0-address.                         | Undeclared Multisig                                                                                       |
| FactoryRegistry            | approve                  | Approves a set of factories used in Velodrome Protocol.                                   | Undeclared Multisig                                                                                       |
| FactoryRegistry            | unapprove                | Unapproves a set of factories used in Velodrome Protocol.                                 | Undeclared Multisig                                                                                       |
| FactoryRegistry            | setManagedRewardsFactory | Sets the rewards factory address.                                                         | Undeclared Multisig                                                                                       |
| Minter                     | setTeam                  | Assigns the team role to a specific address.                                              | Aerodrome Foundation and Incentives multisig                                                                              |
| Minter                     | acceptTeam               | Transfers the team address to the role pendingTeam.                                       | Currently, no address has the role pendingTeam                                                                                                                |
| Minter                     | setTeamRate              | Changes the team's percentage, capped to a maximum of 500 basis points (5%).              | Aerodrome Foundation and Incentives multisig                                                                             |
| Minter                     | nudge                    | Allows epoch governor to modify the tail emission rate within specific bounds.            | Undeclared Multisig                                                                                       |
| PoolFactory                | setVoter                 | Sets a new voter for all pools deployed after that.                                       | Contract voter 0x16613524e02ad97eDfeF371bC883F2F5d6C480A5 (immutable)                                                                     |
| PoolFactory                | setPauser                | Sets a new pauser for all pools deployed after that.                                      | Undeclared Multisig                                                                                       |
| PoolFactory                | setPauseState            | Sets or removes the paused state of the factory.                                          | Undeclared Multisig                                                                                       |
| PoolFactory                | setFeeManager            | Designates a new address to be the FeeManager.                                            | Undeclared Multisig                                                                                       |
| PoolFactory                | setFee                   | Sets a new fee for all future deployed fees, within a maximum of 100 basis points.        | Undeclared Multisig                                                                                       |
| PoolFactory                | setCustomFee             | Sets a custom fee for a specific pool, capped at 3%.                                      | Undeclared Multisig                                                                                       |
| Voter                      | setGovernor              | Sets a new governor.                                                                      | Undeclared Multisig                                                                                      |
| Voter                      | setEpochGovernor         | Sets a new epoch-based governor.                                                          | Undeclared Multisig                                                                                      |
| Voter                      | setEmergencyCouncil      | Sets a new emergency council.                                                             | Emergency Council Multisig                                                                                        |
| Voter                      | setMaxVotingNum          | Sets a new maximum voting number.                                                         | Undeclared Multisig                                                                                       |
| Voter                      | whitelistToken           | Whitelists (or unwhitelists) a token for use in bribes.                                   | Undeclared Multisig                                                                                       |
| Voter                      | whitelistNFT             | Whitelists (or unwhitelists) a token ID for voting in the last hour prior to epoch flip.  | Undeclared Multisig                                                                                       |
| Voter                      | killGauge                | Kills a gauge, preventing new emissions and deposits, but allowing withdrawals.           | Emergency Council Multisig                                                                     |
| Voter                      | reviveGauge              | Revives a killed gauge, allowing it to receive emissions and deposits again.              | Emergency Council Multisig                                                                     |
| VotingEscrow               | createManagedLockFor     | Creates a managed NFT (a permanent lock).                                                 | AllowedManager or Governor Undeclared Multisig                                                            |
| VotingEscrow               | depositManaged           | Delegates balance to a managed NFT, re-locking it to the maximum lock time on withdrawal. | Voter contract 0x16613524e02ad97eDfeF371bC883F2F5d6C480A5                                                                                 |
| VotingEscrow               | withdrawManaged          | Retrieves locked rewards and withdraws balance from managed NFT.                          | Voter contract 0x16613524e02ad97eDfeF371bC883F2F5d6C480A5                                                                                 |
| VotingEscrow               | setAllowedManager        | Permits one address to call createManagedLockFor() that is not the governor.              | Governor (Undeclared Multisig)                                                                             |
| VotingEscrow               | setManagedState          | Sets Managed NFT state. Inactive NFTs cannot be deposited into.                           | Emergency Council Multisig or Governor (Undeclared Multisig) |
| VotingEscrow               | setVoterAndDistributor   | Sets Voter and distributor reference in this contract.                                    | Voter contract 0x16613524e02ad97eDfeF371bC883F2F5d6C480A5                                                                                 |
| VotingEscrow               | voting                   | Sets voted for \_tokenId to true or false.                                                | Voter contract 0x16613524e02ad97eDfeF371bC883F2F5d6C480A5                                                                                 |
| NonfungiblePositionManager | setTokenDescriptor       | Sets a new token descriptor.                                                              | Undeclared Multisig                                                                                     |
| NonfungiblePositionManager | setOwner                 | Sets a new owner for the contract.                                                        | Undeclared Multisig                                                                                       |
| PoolFactory                | setOwner                 | Sets a new owner for the pool factory.                                                    | Undeclared Multisig                                                                                       |
| PoolFactory                | setSwapFeeManager        | Sets a new swap fee manager.                                                              | Undeclared Multisig                                                                                      |
| PoolFactory                | setUnstakedFeeManager    | Sets a new unstaked fee manager.                                                          | Undeclared Multisig                                                                                       |
| PoolFactory                | setSwapFeeModule         | Sets a new swap fee module.                                                               | SwapFeeManager (Undeclared Multisig)                                                                       |
| PoolFactory                | setUnstakedFeeModule     | Updates the unstaked fee module of the factory.                                           | UnstakeFeeManager (Undeclared Multisig)                                                                    |
| PoolFactory                | setDefaultUnstakedFee    | Updates the default unstaked fee of the factory.                                          | UnstakeFeeManager (Undeclared Multisig)                                                                     |
| PoolFactory                | enableTickSpacing        | Enables a certain tickSpacing in the pools deployed from the factory.                     | Undeclared Multisig                                                                                       |
| CustomSwap                 | setCustomFee             | Sets a custom fee between 0 and a max fee for a specified pool.                           | SwapFeeManager (Undeclared Multisig)                                                                       |
| UnstakedFeeModule          | setCustomFee             | Sets a custom fee between 0 and a max fee for a specified pool.                           | UnstakeFeeManager (Undeclared Multisig)                                                                    |


## Dependencies

No external dependency has been found.


## Exit Window

No _timelocks_ or other form of exit window have been found. All upgrades take place immediately.

# Security Council

| ✅ /❌ | Requirement                                                                |
|------|----------------------------------------------------------------------------|
| ❌    | At least 7 signers                                                         |
| ❌    | At least 51% threshold                                                     |
| ❌    | At least 50% non-team signers                                              |
| ❌    | Signers are publicly announced (with name or pseudonym)                    |