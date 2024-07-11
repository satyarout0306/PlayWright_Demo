import { Page, Locator } from '@playwright/test';
import CompletePageLocators from '../locators/ComplatePageLocators';

class CompletePage {
  private page: Page;
  private locators: CompletePageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new CompletePageLocators(page);
  }

  async backToProducts() {
    await this.locators.backToProductsButton.click();
  }

  async logout() {
    await this.locators.menuButton.click();
    await this.locators.logoutLink.click();
  }
}

export default CompletePage;