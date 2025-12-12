# ew-rate-limiter

Akamai EdgeWorker that calls a rate-limiter API and enforces rate limiting based on the response.
<img width="984" height="362" alt="image" src="https://github.com/user-attachments/assets/6a3e4a18-378f-4380-821d-575976af8665" />

## Features

- Checks for an Authorization header and forwards it to a `/rate-limiter` endpoint.
- If the rate-limiter response is not OK, returns the response body and status to the client.
- Designed for use in the `onClientRequest` event handler so that it will happen before cache.
- Written in TypeScript and built for Akamai EdgeWorkers.

## Project Structure

- `main.ts` — EdgeWorker logic
- `package.json` — Project configuration and scripts
- `tsconfig.json` — TypeScript configuration
- `built/` — Compiled output
- `dist/` — Bundled EdgeWorker for deployment

## Scripts

- `npm run build` — Compiles TypeScript and bundles the EdgeWorker
- `npm run build-ts` — Compiles TypeScript
- `npm run build-bundle-json` — Creates bundle metadata
- `npm run build-ew-tgz` — Bundles EdgeWorker for upload
- `npm run upload-edgeworker` — Uploads bundle to Akamai
- `npm run activate-edgeworker` — Activates EdgeWorker on staging

## Usage

1. Clone the repository and install dependencies:
   ```sh
   npm install --save-dev typescript
   npm install @types/akamai-edgeworkers
   mkdir dist
   mkdir built
   ```
2. Build the EdgeWorker:
   ```sh
   npm run build
   ```
3. Deploy and activate using the provided scripts (requires Akamai CLI and credentials).

## Configuration

Edit the `config` section in `package.json` to set your EdgeWorker ID, group, and other deployment details.

## Requirements

- Node.js
- Akamai CLI with EdgeWorkers plugin
- Akamai account and credentials

## License

ISC

---

For more information, see the [Akamai EdgeWorkers documentation](https://techdocs.akamai.com/edgeworkers/docs/).
