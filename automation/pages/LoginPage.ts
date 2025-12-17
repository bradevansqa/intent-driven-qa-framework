import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMessage = page.locator('[data-qa="login-error"]');
  }

  async open(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.page.fill('[data-qa="login-email"]', email);
    await this.page.fill('[data-qa="login-password"]', password);
    await this.page.click('[data-qa="login-button"]');
  }
}

