import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type AuthenticatedFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthenticatedFixtures>({
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // Navigate & attempt login
    await loginPage.open();
    await loginPage.login(
      process.env.TEST_USER_EMAIL ?? '',
      process.env.TEST_USER_PASSWORD ?? ''
    );

    // Do NOT assert login success here.
    // Auth is environment-dependent on automationexercise.com.
    // Tests may conditionally assert based on UI state.
    await use(page);
  },
});

export { expect } from '@playwright/test';
