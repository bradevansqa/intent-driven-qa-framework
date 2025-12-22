import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function loginAsValidUser(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('user@test.com', 'correct-password');
}
