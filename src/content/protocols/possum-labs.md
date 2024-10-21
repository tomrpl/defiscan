---
protocol: "Possum Labs"
website: "https://www.possumlabs.io"
x: "https://x.com/Possum_Labs"
github: "https://github.com/PossumLabsCrypto"
defillama_slug: "possum-labs"
type: "Yield"
chain: "Arbitrum"
stage: 0
risks: "['M','L','H','L','H']"
author: "stengarl, sagaciousyves"
date: "2024-10-04"
---

# Risks

| ✅ /❌ | Risk                                                    |
| ------ | ------------------------------------------------------- |
| ❌     | Users’ funds cannot be stolen, frozen or lost           |
| ❌     | Users’ unclaimed yield cannot be stolen, frozen or lost |
| ❌     | Users cannot be censored                                |
| ✅     | Users can opt-out of unwanted protocol changes          |
| ✅     | Users cannot lose access to the protocol functions      |

Note, these risks only account for observed centralization vectors and do not include other sources such as economic or technical flaws in the protocol design and implementation.

# Assessment

## Chain

This report covers Possum Labs deployment on the Arbitrum mainnet. As Arbitrum is still evolving in terms of decentralization and governance, it does not yet meet the highest standard of decentralization (Stage 1 according to L2Beat).

## Upgradeability

Possum Labs consists of two main components: Core for Governance and Portals for Upfront Yield.

Core Contracts:
The core governance contracts of the Possum Labs protocol are fully immutable. This immutability ensures that users are protected from any risk of unexpected upgrades, censorship, or asset confiscation. The fixed nature of these contracts guarantees long-term stability and security, safeguarding user assets and maintaining the integrity of governance decisions.

Portals and Adapters:
The protocol also offers additional functionality through Portals, which allow users to swap yield into other tokens by leveraging the 1inch router. These Portals, however, operate using upgradable AdapterV1 contracts. These adapters provide flexibility in the system, enabling future adjustments or enhancements.

Upgrade Process for Adapters:
Although the core protocol contracts remain immutable, the AdapterV1 contracts associated with the Portals are upgradable. The multisig controlled by Possum Labs has the authority to propose a migration to a new adapter via the proposeMigrationDestination function. However, this process is not automatic. The proposed upgrade must be approved by token holders through a majority vote. This governance mechanism ensures that while upgrades are possible, they require community approval, reducing the risks associated with unilateral changes by a single entity.
This balance between immutability for the core governance contracts and the potential for upgrades in the Portals ensures both stability and flexibility within the Possum Labs ecosystem.


## Autonomy

The Possum Labs Portals v2 are integrated with two key external systems: Vaultka and Arbitrageurs, both of which play an essential role in ensuring the protocol’s functionality.

Vaultka is a yield-generating protocol where the assets deposited through the Portals are staked to generate returns. By relying on Vaultka to manage and grow the assets, the autonomy of the Portals depends significantly on the stability and security of Vaultka. If Vaultka were compromised, either through a hack or other failure, it could lead to the loss of staked assets, severely impacting the entire system. This dependency creates a potential vulnerability, as the Portals system cannot operate independently from Vaultka without compromising its yield-generating function.

Arbitrageurs form another critical external entity within the ecosystem. They interact with the shared liquidity pools in Portals v2 to ensure price efficiency and maintain market dynamics. Without the participation of arbitrageurs, the liquidity pools would not function as intended, leading to potential imbalances in the system. Their involvement is crucial for maintaining liquidity flow and price parity across different pools and markets.

Thus, the overall autonomy of Portals v2 is closely tied to these external entities. A Vaultka hack would result in asset losses, and a lack of arbitrageur participation would lead to inefficiencies in liquidity management, both of which would severely hinder the system’s performance and overall autonomy.

## Exit Window

Each portal in Possum Labs corresponds to a principal type and is paired with an adapter contract. These adapter contracts are upgradable, meaning changes to the functionality are possible. The upgrade process is governed by a multisig mechanism controlled by Possum Labs, which has the ability to propose a new contract address for the adapter.
The upgrade process follows a voting mechanism, the process is:
Multisig Proposal: Possum Labs multisig proposes a new adapter contract.
Community Vote: Token holders approve the change with a majority (>50%) vote.
Exit Window: A 7-day delay after the vote passes allows users to exit the protocol if they disagree.
Permissionless Migration: The migration is executed permissionlessly via executeMigration().

Though the adapters are upgradable, the core functionalities of the protocol, such as Portal interactions, can still operate without adapters. The V1 adapters simply add additional functionality, like the ability to swap PSM to any token via the 1inch router.

Since the upgrade process includes a 7-day delay after a successful vote and is governed by token holder approval, the system ensures users have adequate time to review changes and exit if they disagree. This transparent process prioritizes user autonomy by allowing a clear window for action before the implementation of any updates.

## Accessibility

Currently, Possum Labs offers only a single frontend without any backup solution. However, the team has plans to make their products open-source and available for self-hosting once budget and time allow, ensuring that users will eventually have more flexibility and control over their access to the protocol.

# Technical Analysis

## Contracts

| **Contract Name**                          | **Address**                                |
| ------------------------------------------ | ------------------------------------------ |
| PSM                                        | 0x17A8541B82BF67e10B0874284b4Ae66858cb1fd5 |
| PossumCore                                 | 0xb12192f4E3AcCb5D33589Ed683701F69a272EA26 |
| Virtual LP                                 | 0x212Bbd56F6D4F999B2845adebd8cec147851E383 |
| bVKA-L (MintBurnToken)                     | 0x61D3657fa8F7618Ebe7E05B4026C28b13BB0d805 |
| USDC Portal (PortalV2MultiAsset)           | 0x9167CFf02D6f55912011d6f498D98454227F4e16 |
| USDC Portal Energy Token (MintBurnToken)   | 0x6bD75940B568b5400D6971Ed0542FC252C1eCC4E |
| USDC Portal NFT (PortalNFT)                | 0x1C64e6560b9267c5De60d7aFCB298b9494d1cC42 |
| USDC Portal Adapter (AdapterV1)            | 0x44d583Ee73B6D9B4c8B830049DbCc0FA2c9580C0 |
| USDC.e Portal (PortalV2MultiAsset)         | 0xE8EfFf304D01aC2D9BA256b602D736dB81f20984 |
| USDC.e Portal Energy Token (MintBurnToken) | 0x1229D05c703fa195921C02F288D7111206B4C7E2 |
| USDC.e Portal NFT (PortalNFT)              | 0x616AE6765Ae491d606Fc9EA3f31fe8BDAe47CE45 |
| USDC.e Portal Adapter (AdapterV1)          | 0x5872664ce990466f2e41bd7c576Fc0CdFA2A080a |
| ETH Portal (PortalV2MultiAsset)            | 0xe771545aaDF6feC3815B982fe2294F7230C9c55b |
| ETH Portal Energy Token (MintBurnToken)    | 0xA9Ee3b373843008a56178Fc3047fbD1C145c5a12 |
| ETH Portal NFT (PortalNFT)                 | 0xbCF4bd2c5F0e7f7EF2aE1b5d9Bb3A1e235b56c95 |
| ETH Portal Adapter (AdapterV1)             | 0xd47571Db7362800814ef0798baD5F3fDdaEfcd30 |
| WBTC Portal (PortalV2MultiAsset)           | 0x919B37b5f2f1DEd2a1f6230Bf41790e27b016609 |
| WBTC Portal Energy Token (MintBurnToken)   | 0xe6635d1B3CC0697C16BF4E02Dd5D89a0dA2bdD5b |
| WBTC Portal NFT (PortalNFT)                | 0x19cd08Aa2042c57eC823733cDA1768bdA18718fd |
| WBTC Portal Adapter (AdapterV1)            | 0x59aF1881a44E90B3a0DbA85CebA55Dd95344b989 |
| ARB Portal (PortalV2MultiAsset)            | 0x523a93037c47Ba173E9080FE8EBAeae834c24082 |
| ARB Portal Energy Token (MintBurnToken)    | 0x28302fb6F403496B8F6DFcFA9d492C837061A520 |
| ARB Portal NFT (PortalNFT)                 | 0x83A7EED6B703af82F4944D59c92C1919a9d3A93A |
| ARB Portal Adapter (AdapterV1)             | 0xc62190C2b9413e8482a5895E8739E4632507f99d |
| LINK Portal (PortalV2MultiAsset)           | 0x51623b54753E07Ba9B3144Ba8bAB969D427982b6 |
| LINK Portal Energy Token (MintBurnToken)   | 0x8f2301d6Ed2dE8C8A99Db85eFb8C28d3224e5212 |
| LINK Portal NFT (PortalNFT)                | 0x377BCEea5A7e2E8f677Ed93bb95E9813c67dC765 |
| LINK Portal Adapter (AdapterV1)            | 0x0DAe61Bd94b081F65D009f7d72f8f4d48dFB1375 |
| TimeRift                                   | 0x6df4EF024089ab148078fdD88f5BF0Ee63248D3E |

## Permission owners

| Name          | Account                                                                                                               | Type         |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ |
| Team Multisig | [0xAb845D09933f52af5642FC87Dd8FBbf553fd7B33](https://etherscan.io/address/0xAb845D09933f52af5642FC87Dd8FBbf553fd7B33) | Multisig 2/3 |

## Permissions

| Contract                                   | Function                    | Impact                                                                                                                                                                        | Owner                                                |
|--------------------------------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| PossumCore                                 | updateWhitelist             | The Guardian can list and delist addresses. There is at least 1 permanent address that cannot be delisted. CF can be spent to distribute PSM incentives to allowed addresses. | Team Multisig                                        |
| Virtual LP                                 | registerPortal              | Function to add new Portals to the registry, for which PSM, PE, and bTokens can be swapped.                                                                                   | 0x0 (renounced)                                      |
| USDC Portal Energy Token (MintBurnToken)   | mint                        | This function allows the permission owner to mint new PE tokens for the USDC Portal.                                                                                          | USDC Portal contract (immutable reference)           |
| USDC Portal NFT (PortalNFT)                | mint                        | This function allows the permission owner to mint new Portal NFTs.                                                                                                            | USDC Portal contract (immutable reference)           |
| USDC Portal NFT (PortalNFT)                | redeem                      | Redeem Position NFT to receive an internal Account in Portal.                                                                                                                 | USDC Portal contract (immutable reference)           |
| USDC Portal Adapter (AdapterV1)            | proposeMigrationDestination | Allow the contract owner to propose a new Adapter contract for migration. The principal stakers need to accept with >50% of the staked capital in an on-chain vote.           | Team Multisig                                        |
| USDC.e Portal Energy Token (MintBurnToken) | mint                        | This function allows the permission owner to mint new PE tokens for the USDC.e Portal.                                                                                        | USDC.e Portal contract (immutable reference)         |
| USDC.e Portal NFT (PortalNFT)              | mint                        | This function allows the permission owner to mint new Portal NFTs.                                                                                                            | USDC.e Portal contract (immutable reference)         |
| USDC.e Portal NFT (PortalNFT)              | redeem                      | Redeem Position NFT to receive an internal Account in Portal.                                                                                                                 | USDC.e Portal contract (immutable reference)         |
| USDC.e Portal Adapter (AdapterV1)          | proposeMigrationDestination | Allow the contract owner to propose a new Adapter contract for migration. The principal stakers need to accept with >50% of the staked capital in an on-chain vote.           | Team Multisig                                        |
| ETH Portal Energy Token (MintBurnToken)    | mint                        | This function allows the permission owner to mint new PE tokens for the ETH Portal.                                                                                           | ETH Portal contract (immutable reference)            |
| ETH Portal NFT (PortalNFT)                 | mint                        | This function allows the permission owner to mint new Portal NFTs.                                                                                                            | ETH Portal contract (immutable reference)            |
| ETH Portal NFT (PortalNFT)                 | redeem                      | Redeem Position NFT to receive an internal Account in Portal.                                                                                                                 | ETH Portal contract (immutable reference)            |
| ETH Portal Adapter (AdapterV1)             | proposeMigrationDestination | Allow the contract owner to propose a new Adapter contract for migration. The principal stakers need to accept with >50% of the staked capital in an on-chain vote.           | Team Multisig                                        |
| WBTC Portal Energy Token (MintBurnToken)   | mint                        | This function allows the permission owner to mint new PE tokens for the WBTC Portal.                                                                                          | WBTC Portal contract (immutable reference)           |
| WBTC Portal NFT (PortalNFT)                | mint                        | This function allows the permission owner to mint new Portal NFTs.                                                                                                            | WBTC Portal contract (immutable reference)           |
| WBTC Portal NFT (PortalNFT)                | redeem                      | The function allows the permission owner to renounce ownership over all permissioned functions in this contract.                                                              | WBTC Portal contract (immutable reference)           |
| WBTC Portal Adapter (AdapterV1)            | proposeMigrationDestination | Allow the contract owner to propose a new Adapter contract for migration. The principal stakers need to accept with >50% of the staked capital in an on-chain vote.           | Team Multisig                                        |
| ARB Portal Energy Token (MintBurnToken)    | mint                        | This function allows the permission owner to mint new PE tokens for the ARB Portal.                                                                                           | ARB Portal contract (immutable reference)            |
| ARB Portal NFT (PortalNFT)                 | mint                        | This function allows the permission owner to mint new Portal NFTs.                                                                                                            | ARB Portal contract (immutable reference)            |
| ARB Portal NFT (PortalNFT)                 | redeem                      | Redeem Position NFT to receive an internal Account in Portal.                                                                                                                 | ARB Portal contract (immutable reference)            |
| ARB Portal Adapter (AdapterV1)             | proposeMigrationDestination | Allow the contract owner to propose a new Adapter contract for migration. The principal stakers need to accept with >50% of the staked capital in an on-chain vote.           | Team Multisig                                        |
| LINK Portal Energy Token (MintBurnToken)   | mint                        | This function allows the permission owner to mint new PE tokens for the LINK Portal.                                                                                          | LINK Portal contract (immutable reference)           |
| LINK Portal NFT (PortalNFT)                | mint                        | This function allows the permission owner to mint new Portal NFTs.                                                                                                            | LINK Portal contract (immutable reference)           |
| LINK Portal NFT (PortalNFT)                | redeem                      | Redeem Position NFT to receive an internal Account in Portal.                                                                                                                 | LINK Portal contract (immutable reference)           |
| LINK Portal Adapter (AdapterV1)            | proposeMigrationDestination | Allow the contract owner to propose a new Adapter contract for migration. The principal stakers need to accept with >50% of the staked capital in an on-chain vote.           | Team Multisig                                        |


## Dependencies

Smart Contract Risks
The reliance on third-party protocols like HMX and Vaultka introduces potential risks, as bugs in these underlying systems could impact user funds.

Centralisation Risks
Certain staking assets within the Possum ecosystem are subject to centralized control, including potential blacklisting or custodial risks (e.g., USDC/.e, WBTC). Furthermore, the upgradeability of staked assets (HLP) and underlying protocols (HMX & Vaultka) could lead to compatibility issues with Portals after updates. Decisions made by centralized managers of these assets and protocols could potentially render interactions with Portals or underlying protocols impossible, potentially resulting in complete loss of user funds. It's important to note that Possum Labs has no control over these entities, and due to its immutable design, Portals cannot actively adapt to changes in underlying protocols or assets.

## Exit Window

For each type of principal there exists a portal and a related adapter contract. Adapter contracts are upgradable. The Possum Labs multisig can propose a new address, but the token owners need to accept with a majority (>50%) vote. If the vote gets through, the new implementation is enforced 7 days after vote surpassed 50%. The migration is then triggered permissionlessly via executeMigration() on the old adapter contract itself.
No time-locks have been found. All upgrades take place immediately.

