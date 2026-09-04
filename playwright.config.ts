import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:4173',
  },
  webServer: {
    command: 'npx http-server -p 4173 .',
    port: 4173,
  },
});
