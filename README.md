# solci-browser-demo

Acceptance repo for solci --cloud-browser: a Playwright job that runs in a Solari cloud browser from GitHub Actions.

The job proves that `.github/workflows/ci.yml` checks out the repo, installs Node dependencies and Chromium, and runs the Playwright tests.
`tests/demo.spec.ts` asserts the local page's `#t` text is `solci cloud browser demo` and the public page at `example.com` has a title matching `/Example Domain/`.
The repo is deliberately a plain Playwright job. `solci run --cloud-browser` from [solari-ci](https://github.com/moazessam376-dev/solari-ci) takes this workflow and points Playwright at Solari cloud Chrome instead of the runner's local Chromium; the report from a real run is in that repo's `docs/cloud-browser-demo.md`.

## Run

- `npm ci`
- `npx playwright install --with-deps chromium`
- `npm test`
The workflow does not read any environment variables.

## Not covered

Nothing in this repo connects to Solari; that wiring lives in solci. Running `npm test` here, or the workflow on a standard GitHub Actions runner, uses local Chromium against a local preview server and one public page.
