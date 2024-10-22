---
protocol: "name of the protocol appended by the version if multiple versions exist (use an '-' and no whitespace)"
website: "https://..."
x: "https://x.com/projecthandle"
github: "https://github.com/projectgithub"
defillama_slug: "the slug used by https://defillama.com"
chain: "the name of the chain on which the protocol is deployed"
stage: 0
risks: "['x','x','x','x','x']"
author: "your author name"
date: "yyyy-mm-dd"
---


# Assessment

## Chain

XYZ is deployed on ... .

## Upgradeability

text

## Autonomy

text

## Exit Window

text

## Accessibility

text

# Technical Analysis

## Contracts

| Contract Name | Address |
| ------------- | ------- |
| contract 1    | 0x123   |
| contract 2    | 0x456   |

## Permission owners

| Name | Account                                       | Type         |
| ---- | --------------------------------------------- | ------------ |
| name | [address](https://etherscan.io/address/0x...) | Multisig x/y |

## Permissions

| Contract      | Function     | Impact      | Owner                   |
| ------------- | ------------ | ----------- | ----------------------- |
| contract name | functionname | description | owner of the permission |

## Dependencies

insert text

## Exit Window

insert text

# Security Council

change ✅ or ❌ accordingly

| ✅ /❌| Requirement                                                                |
|------|----------------------------------------------------------------------------|
| ❌    | At least 7 signers                                                         |
| ❌    | At least 51% threshold                                                     |
| ❌    | At least 50% non-team signers                                              |
| ❌    | Signers are publicly announced (with name or pseudonym)                    |