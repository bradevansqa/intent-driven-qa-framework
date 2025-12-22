import { Page, Locator } from '@playwright/test';

export class SignupPage {
  private readonly page: Page;
  private readonly signupForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupForm = page.locator('form').filter({ hasText: 'Signup' });
  }

  async signup(name: string, email: string): Promise<void> {
    await this.signupForm.getByPlaceholder('Name').fill(name);
    await this.signupForm.getByPlaceholder('Email Address').fill(email);
    await this.signupForm.getByRole('button', { name: 'Signup' }).click();
  }
}
