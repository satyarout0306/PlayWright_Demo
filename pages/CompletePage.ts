import { Page, Locator } from '@playwright/test';

class CompletePage {
  private page: Page;
  private backToProductsButton: Locator;
  private menuButton: Locator;
  private logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}

export default CompletePage;