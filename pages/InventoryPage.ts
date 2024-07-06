import { expect, Page } from '@playwright/test';
import InventoryPageLocators from '../locators/InventoryPageLocators';

class InventoryPage {
  private page: Page;
  private locators: InventoryPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new InventoryPageLocators(page);
    
  }

  async addItemToCart() {
    await this.locators.backpackAddToCartButton.click();
    await this.locators.bikeLightAddToCartButton.click();
    await this.locators.item3.click();
  }

  async goToCart() {
    await this.locators.cartLink.click();
  }

  async validateItemAddedToCart(){
    const cartBadge = await this.page.locator('.shopping_cart_badge').textContent();
    expect(cartBadge).toBe('3');
  }

}

export default InventoryPage;