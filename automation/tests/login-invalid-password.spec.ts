import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login - Invalid Password', async ({ page }) => {
  // Manual Test: manual-tests/login/login-invalid-password.md

  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('user@test.com', 'wrong-password');

  await expect(loginPage.errorMessage).toBeVisible();
});
