# Sol and Taxes

Crypto gains and losses tax calculator for Solana wallets.

## Terminals

1. Sveltekit - `npm run dev`
2. nhost - `nhost dev`

## Development script notes

- `npm run dev` runs sveltekit server
- `nhost dev` runs nhost
- `npm run check` syncs `.env` variables

## Production branches

- `nhost-production` - to deploy nhost/hasura

## Deployment checklist

- Update & switch `.env` (dev to prod)
- Update network to `mainnet-beta`
- Update `transaction-history/+server.ts` mocks to live
- Build & push Docker images (dependencies & server)
- Update K8s files
- Deploy `nhost` branch (if required)
- Deploy K8s updates
- Test

## Deployment commands

Make sure to switch to the appropriate `Dockerfile` code, using `dependencies.Dockerfile` and `production.Dockerfile`, when running the build commands.

`docker build -t {prefix}/{project}-dependencies:2.0.0 .`
`docker build -t {prefix}/{project}:2.0.0 .`
`docker push {prefix}/{project}-dependencies:2.0.0`

See `{infrastructure-repo}` `README` for `k8s` deployment instructions

## Dev notes

- Attach `wallet-address` header when making api calls.
- `hooks.ts` handles server auth, `+layout.ts` initializes data by hitting `/api/data-initialization`
- 1,000 transactions ~ 2MB storage

## History

Pitch deck (Solana Sandstorm Hackathon 2023): https://www.canva.com/design/DAFYZYFXA84/tPhIyq_vOgrF40ZlfF7OXA/view?utm_content=DAFYZYFXA84&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

Demo: https://www.youtube.com/watch?v=IStbMsFPdZY&feature=youtu.be

### Description

Sol and Taxes is an open-sourced crypto tax calculator that helps users calculate gains by reading through all the transactions tied to their wallet.

The tool is designed to make it easy for users to convert 1000s of their crypto transactions into a simple and human-readable format so they can better manage their taxes.

### Tracks Chosen & Why

Track 1 - Human Readable Transactions: Solana transactions are already hard enough to read through for the average person, but when combined with taxes it makes a compelling case for why one should avoid paying crypto taxes, or even to avoid crypto in its entirety.

Sol and Taxes aims to address these issue by making it easier for anyone to read through Solana transactions in the context of paying taxes, so we can all continue being law-abiding citizens.

The app also makes use of Helius APIs, specifically enriched transaction histories and RPC.
