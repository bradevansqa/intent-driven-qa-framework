import { Page, Locator } from '@playwright/test';

export class HeaderPage {
  private readonly page: Page;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.locator('[data-qa="logout"]');
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}
