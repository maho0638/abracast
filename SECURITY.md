# Security

Abracast is designed as a read-only utility.

## Safety rules

- Never paste a private key.
- Never paste a seed phrase.
- Never paste recovery words.
- Never approve a transaction from an unknown claim page.
- Always verify reward, XP, and role claims through official Abstract channels.

## Abracast recommendation rule

Abracast should never recommend a project only because it is popular, fun, or high-volume.

A `Support` recommendation requires:

- Clear official source trail
- No private-key or seed-phrase request
- Understandable wallet interaction
- Clear economic model
- Audit, badge, open-source, or community verification where risk is high
- Visible project communication and status

## What Abracast stores

Abracast stores user-entered activity data in browser `localStorage`.

It does not send your notes, evidence links, or app logs to a backend.

## Network requests

Abracast makes read-only JSON-RPC requests to:

- `https://api.mainnet.abs.xyz`
- `https://api.testnet.abs.xyz`

It uses:

- `eth_chainId`
- `eth_blockNumber`
- `eth_getBalance`

## Reporting issues

If you find a bug or risky behavior, open an issue in the project repository with:

- Browser name
- Steps to reproduce
- Expected result
- Actual result
- Screenshot if helpful
