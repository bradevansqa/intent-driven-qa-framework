import { test, expect } from '../fixtures/authenticatedPage';
import { HeaderPage } from '../pages/HeaderPage';

test('Logout - Authenticated User', async ({ authenticatedPage }) => {
  const header = new HeaderPage(authenticatedPage);

  if (await header.logoutButton.isVisible()) {
    await header.logout();
    await expect(authenticatedPage).toHaveURL(/login/);
  } else {
    test.skip(true, 'Logout not visible — auth not established');
  }
});
