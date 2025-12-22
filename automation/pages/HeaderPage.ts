import { Page, Locator } from '@playwright/test';

export class HeaderPage {
  private readonly page: Page;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Codegen shows Logout is a visible link in the header
    this.logoutButton = page.getByRole('link', { name: /logout/i });
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}

