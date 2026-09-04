import { test, expect } from '@playwright/test';

test('loads the local preview through Solari', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#t')).toHaveText('solci cloud browser demo');
});

test('loads a public page through Solari', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
