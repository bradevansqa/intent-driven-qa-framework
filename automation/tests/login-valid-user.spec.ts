import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login - Invalid Password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('bad@test.com', 'bad-password');

  await expect(loginPage.errorMessage).toBeVisible();
});

