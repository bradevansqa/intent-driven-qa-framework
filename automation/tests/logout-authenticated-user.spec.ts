import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HeaderPage } from '../pages/HeaderPage';

test('Logout - Authenticated User', async ({ page }) => {
  // Manual Test: manual-tests/login/logout-authenticated-user.md

  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);

  await loginPage.open();
  await loginPage.login('user@test.com', 'correct-password');

  await headerPage.logout();

  await expect(page).toHaveURL(/login/);
});
