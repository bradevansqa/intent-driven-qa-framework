import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-qa="add-to-cart"]');
  }

  async addItem() {
    await this.addToCartButton.click();
  }
}
