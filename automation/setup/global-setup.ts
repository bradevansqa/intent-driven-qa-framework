import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use?.baseURL as string;

  const email = process.env.TEST_USER_EMAIL;
  const password = process.env.TEST_USER_PASSWORD;

  if (!email || !password) {
    throw new Error(
      'Missing TEST_USER_EMAIL or TEST_USER_PASSWORD. Check your .env file.'
    );
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);

  // ABSOLUTE URL — required in globalSetup
  await page.goto(`${baseURL}/login`);
  await loginPage.login(email, password);

  await page.context().storageState({
    path: 'automation/.auth/user.json',
  });

  await browser.close();
}

export default globalSetup;
