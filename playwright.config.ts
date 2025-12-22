import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './automation/tests',

  globalSetup: './automation/setup/global-setup',

  use: {
    baseURL: 'https://automationexercise.com',
    storageState: 'automation/.auth/user.json',
    trace: 'on-first-retry',
    headless: true,
  },

  reporter: [['html', { open: 'never' }]],
});
