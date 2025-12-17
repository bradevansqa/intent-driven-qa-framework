import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login - Valid User', async ({ page }) => {
  // Manual Test: manual-tests/login/login-valid-user.md

  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('user@test.com', 'correct-password');

  await expect(page).not.toHaveURL(/login/);
});
