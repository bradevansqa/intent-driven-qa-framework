import { test, expect } from '../fixtures/authenticatedPage';
import { CartPage } from '../pages/CartPage';

test('Cart - Add Item', async ({ authenticatedPage }) => {
  // Manual Test: manual-tests/cart/add-item-to-cart.md

  const cartPage = new CartPage(authenticatedPage);

  await cartPage.addItem();
  await expect(authenticatedPage).toHaveURL(/cart/);
});
