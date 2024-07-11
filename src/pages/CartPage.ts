import { Page, Locator, expect } from '@playwright/test';
import CartPageLocators from '../locators/CartPageLocators';

class CartPage {
  private page: Page;
  private locators: CartPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new CartPageLocators(page);
  }

  async proceedToCheckout() {
    await expect(this.locators.pageTitle_cart).toHaveText("Your Cart");
    await this.locators.checkoutButton.click();
  }
}

export default CartPage;