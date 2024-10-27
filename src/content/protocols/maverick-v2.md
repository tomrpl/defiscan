---
protocol: "Maverick-v2"
website: "app.mav.xyz"
x: "https://x.com/mavprotocol"
github: "https://github.com/maverickprotocol"
defillama_slug: "maverick-v2"
chain: "Ethereum"
stage: 0
risks: ["L", "M", "M", "H", "H"]
author: ["CookingCryptos", "sagaciousyves"]
submission_date: "2024-10-23"
publish_date: "2024-10-23"
acknowledge_date: "1970-01-01"
update_date: "1970-01-01"
---

# Summary

Maverick helps its users to maximize capital efficiency by automating the concentration of liquidity as price moves. Higher capital efficiency leads to more liquid markets, which means better prices for traders and more fees for liquidity providers. This built-in feature also helps LPs to eliminate the high gas fees that come from adjusting positions around price themselves.

Liquidity providers can also now choose to follow the price of an asset in a single direction, effectively making a bet on the price trajectory of a specific token. These directional bets are similar to single-sided liquidity strategies, in that the liquidity provider will be mostly or entirely exposed to a single asset in a given pool.

Together, these technological innovations represent a paradigm shift in the way smart contracts manage liquidity. Maverick is the first Dynamic Distribution AMM, capable of automating liquidity strategies that before now have required daily maintenance or the use of metaprotocols.

# Overview

## Chain

This report covers the Maverick v2 deployment on the Ethereum chain. Ethereum is considered fully decentralized according to this framework.

## Upgradeability

Maverick Protocol demonstrates partial upgradeability.

Most contracts (`MaverickV2IncentiveMatcher`, `MaverickV2PoolLens`) have had ownership, and the respective permissions, revoked. However, other contracts like `MaverickV2Factory` and `MaverickToken` (MAV token) still expose permissions. These permissions allow the owner to change protocol fees, destination addresses, and security settings (e.g. through the LayerZero protocol) without effective restrictions on the update values. Hence, these permissions potentially change the protocol's expected performance or affect users' unclaimed yield.

As a result, the protocol's Upgradeability score is Medium.

## Autonomy

Maverick's orotocol token (MAV) relies on the LayerZero protocol for bridging. In particular, if the DVN (currently Google Cloud) fails or behaves maliciously, it could disrupt cross-chain operations. While LayerZero’s decentralized design allows permissionless executors to step in if needed, existing permissions enable to change critical settings (e.g. trusted remotes) potentially affecting the expected behavior of the MAV token.

The protocol's Autonomy score thus is considered Medium.

## Exit Window

The only two contracts in Maverick protocol that expose permissions are `MaverickToken` (MAV) and `MaverickV2Factory`. The permissions found on the first are not protected with an exit window for users. Further, since `MaverickV2Factory` is not publicly verified, it remains unclear whether an exit window protects the permissions found in this contract.

As a result, the protocol's Exit Window score is High.

## Accessibility

Only a single user interface, app.mav.xyz, exists without a backup solution for users if the interface is shutdown or users are censored.

Hence, the Accessibility score is High.

# Technical Analysis

## Contracts

| Contract Name                     | Address                                    |
| --------------------------------- | ------------------------------------------ |
| MaverickV2Factory                 | 0x0A7e848Aca42d879EF06507Fca0E7b33A0a63c1e |
| MaverickV2PoolLens                | 0x6A9EB38DE5D349Fe751E0aDb4c0D9D391f94cc8D |
| MaverickV2Quoter                  | 0xb40AfdB85a07f37aE217E7D6462e609900dD8D7A |
| MaverickV2Router                  | 0x62e31802c6145A2D5E842EeD8efe01fC224422fA |
| MaverickV2Position                | 0x116193c58B40D50687c0433B2aa0cC4AE00bC32c |
| MaverickV2BoostedPositionFactory  | 0xd94C8f6D13Cf480FfAC686712C63471D1596cc29 |
| MaverickV2BoostedPositionLens     | 0x12DD145927CECF616cbD196789c89C2573A53244 |
| MaverickV2IncentiveMatcherFactory | 0x924Dd05c2325829fa4063CAbE1456273084009d7 |
| MaverickV2VotingEscrowFactory     | 0x451d47fd6207781dc053551edFD98De8d5EB4Cda |
| MaverickV2RewardFactory           | 0x63EF1a657cc53747689B201aa07A76E9ef22f8Fe |
| MaverickV2RewardRouter            | 0xc0C3BC532690af8922a2f260c6e1dEb6CFaB45A0 |
| MaverickV2VotingEscrowLens        | 0x102f936B0fc2E74dC34E45B601FaBaA522f381F0 |
| MaverickToken                     | 0x7448c7456a97769F6cD04F1E83A4a23cCdC46aBD |
| LegacyMaverickVe                  | 0x4949Ac21d5b2A0cCd303C20425eeb29DCcba66D8 |
| MaverickVeV2                      | 0xC6addB3327A7D4b3b604227f82A6259Ca7112053 |
| MaverickTokenIncentiveMatcher     | 0x9172a390Cb35a15a890293f59EA5aF250b234D55 |
| MaverickV2Factory                 | 0x0A7e848Aca42d879EF06507Fca0E7b33A0a63c1e |
| MaverickV2PoolLens                | 0x6A9EB38DE5D349Fe751E0aDb4c0D9D391f94cc8D |
| MaverickV2Quoter                  | 0xb40AfdB85a07f37aE217E7D6462e609900dD8D7A |
| MaverickV2Router                  | 0x62e31802c6145A2D5E842EeD8efe01fC224422fA |

## Permission Owners

| Name                  | Account                                                                                                               | Type         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ |
| Undeclared Multisig 1 | [0xcAf836A03D8ADcDfF48F6d0354061F468ae8b2A3](https://etherscan.io/address/0xcAf836A03D8ADcDfF48F6d0354061F468ae8b2A3) | Multisig 3/6 |
| Undeclared Multisig 2 | [0xA2206fe97eE8d2E689EFB96aE03be5F50BFAD027](https://etherscan.io/address/0xA2206fe97eE8d2E689EFB96aE03be5F50BFAD027) | Multisig 3/6 |

## Permissions

| Contract                   | Function                  | Impact                                                                                                                                                                                                                                                                           | Owner                                                             |
| -------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| MaverickV2Factory          | setProtocolFeeRatio       | This function allows the owner of the permission to set the protocol fee. Fees are applied to every trade in the AMM.                                                                                                                                                            | Undeclared Multisig 2                                             |
| MaverickV2Factory          | setProtocolLendingFeeRate | Set the protocol lending fee rate.                                                                                                                                                                                                                                               | Undeclared Multisig 2                                             |
| MaverickV2Factory          | setProtocolFeeReceiver    | Set the protocol fee receiver address. If protocol fee is non-zero, user will be able to permissionlessly push protocol fee from a given pool to this address.                                                                                                                   | Undeclared Multisig 2                                             |
| MaverickV2Factory          | claimProtocolFeeForPool   | This function allows the owner of the permission to collect the fees that were accrued through trades with the AMM.                                                                                                                                                              | Undeclared Multisig 2                                             |
| MaverickV2Factory          | transferOwnership         | This function allows the owner of the permissions to transfer the ownership of all of the contract’s permission to a new owner.                                                                                                                                                  | Undeclared Multisig 2                                             |
| MaverickV2Factory          | renounceOwnership         | This function allows the owner of the permission to disable the access to permissioned functions for everybody for ever. Parameters that were set with this functions are frozen to the respective values.                                                                       | Undeclared Multisig 2                                             |
| MaverickV2IncentiveMatcher | permissionedAddIncentives | permissionedAddIncentives allows users to commit additional incentives for an already boosted position on Maverick. The function can only be called through MaverickV2IncentiveMatcherCaller contract 0x1e83a61839839EAdBB5C639fbf581E2C59d645dE ( The permission is immutable ) | 0x1e83a61839839EAdBB5C639fbf581E2C59d645dE (Immutable permission) |
| Maverick Token (OFT)       | setUseCustomAdapterParams | The owner is allowed to set a flag (bool) whether or not to use a customer DVN adapter, if true, customerAdapterParams need to be submitted when doing cross-chain transfers.                                                                                                    | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setConfig                 | This function allows the owner to set the security stack settings inside LayerZero protocol. Security stack settings include designated DVNs, how many block confirmations                                                                                                       | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setSendVersion            | This function allows the owner to set the messaging library version on origin chain.                                                                                                                                                                                             | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setReceiveVersion         | This function allows the owner to set the messaging library version any of the receiving chains.                                                                                                                                                                                 | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | forceResumeReceive        | This function allows the owner to resume the message flow in blocking mode and clear the stored payload.                                                                                                                                                                         | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setTrustedRemote          | This function allows the owner to set the trusted path for the cross-chain communication, from origin address to destination address. This could be mis-used to point to a malicious implementation on the destination chain.                                                    | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setTrustedRemoteAddress   | This function is similar to setTrustedRemote, but it allows the owner only to set the destination address.                                                                                                                                                                       | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setPrecrime               | The owner is allowed to set an address for precrime . It’s unclear for what precrime is used.                                                                                                                                                                                    | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setMinDstGas              | The owner is allowed to set a minimal gas amount for a destination chain. The destination chain is specified with the chainId.                                                                                                                                                   | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | setPayloadSizeLimit       | The owner is allowed to set a limit to the payload size, again for each destination chain individually.                                                                                                                                                                          | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | renounceOwnership         | The owner can renounce ownership, making the contract immutable regarding the aforementioned settings, otherwise the contract continues to work as-is. Note: Technically the owner is now the 0-address.                                                                         | Undeclared Multisig 1                                             |
| Maverick Token (OFT)       | transferOwnership         | The owner can transfer the ownership to another address, which then receives the permissions to call the aforementioned functions and change settings of the OFT token.                                                                                                          | Undeclared Multisig 1                                             |

## Dependencies

Maverick Protocol relies on LayerZero for cross-chain communication and transaction validation.
LayerZero Protocol is itself fully permissionless and censorship resistant through its immutable nature. The protocol itself will exist indefinitely even if Layer0 Labs ceases to exist. Layer0 Labs is responsible for deploying immutable endpoints on every chain that integrates with Layer0 and the different endpoints reference each other. This means if Layer0 ceases to exist, no new blockchains are added to the cross-chain network, but new organisations can step in and create a new cross-chain network.

The Protocol relies on Executors which trigger queued transaction on destination chains. The set of executors can be customised by the respective protocol, in this case maverick. However, it’s also fully permissionless, even if the designated executors do not execute the transaction on the destination chain, any user can step in and execute the transaction.

DVNs are validators of transaction packets that need to move cross-chain. They are chosen by the protocol with security settings. If the DVNs cease to exist, the protocol needs to update settings and select new DVNs. The DVNs have a reputation and earn fees for the validating activity, thus are incentivised to behave correctly. Maverick uses the default DVN which is google could: 0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc (deterministic deployed address across all chains). Any protocol that relies on layerWero could choose to run their own DVN and install a malicious verifier algorithm to it, if there is no governance or internal security process is not set up to prevent a project from doing so.

Maverick Token is deployed according to their docs [https://docs.mav.xyz/technical-reference/contract-addresses/v2-contract-addresses](https://docs.mav.xyz/technical-reference/contract-addresses/v2-contract-addresses) to the following chains:

- Arbitrum
- Base
- Mainnet
- zkSync Era
- Scroll
- BNB Chain

## Exit Window

The only two contracts that have some upgrade/change potential are the MaverickV2Factory and the MaverickToken.

MaverickV2Factory:
Since the full source code of MaverickV2Factory is not publicly verified, it’s not clear if fee switches are enforced immediately or not.

MaverickToken:
Token has no timelock for changes/upgrades. The OFT token when ownership is not renounced allows owners to switch destination addresses and security settings. Users do not have the option to opt-out with a waiting period before the change is applied.

# Security Council

| Requirement                                             | Undeclared Multisig 1 | Undeclared Multisig 2 |
| ------------------------------------------------------- | :-------------------: | :-------------------: |
| At least 7 signers                                      |          ✅           |          ✅           |
| At least 51% threshold                                  |          ❌           |          ✅           |
| At least 50% non-team signers                           |          ❌           |          ❌           |
| Signers are publicly announced (with name or pseudonym) |          ❌           |          ❌           |

No information on the multisig in use found in the docs.
