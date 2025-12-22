import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login - Invalid Password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('wrong@test.com', 'wrong-password');

  // Assert by text instead of fragile selector
  await expect(
    page.getByText(/incorrect|invalid/i)
  ).toBeVisible();
});
