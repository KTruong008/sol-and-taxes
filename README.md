# Sol and Taxes

Crypto gains and losses tax calculator for Solana wallets.

Pitch deck: https://www.canva.com/design/DAFYZYFXA84/tPhIyq_vOgrF40ZlfF7OXA/view?utm_content=DAFYZYFXA84&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

Demo: https://www.youtube.com/watch?v=IStbMsFPdZY&feature=youtu.be

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
