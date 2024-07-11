import { expect, Page } from '@playwright/test';
import InventoryPageLocators from '../locators/InventoryPageLocators';
import { getRandomIndexes } from '../utils/getRandomItem';

class InventoryPage {
  private page: Page;
  private locators: InventoryPageLocators;
  

  constructor(page: Page) {
    this.page = page;
    this.locators = new InventoryPageLocators(page);
    
  }

  async addItemToCart() {
    // Selerct 3 diff tiems 

    await this.locators.item1.click();
    await this.locators.item2.click();
    await this.locators.item3.click();

    // Select randomly 3 diff items


    // const itemlocators = this.locators.itemlocators;
    // const count = await itemlocators.count();
    // const randomindex = getRandomIndexes(count, 3);

    // for (const index of randomindex) {
    //   const button = itemlocators.nth(index);
    //   await button.waitFor({ state: 'visible', timeout: 5000 });
    //   await button.click();
    // }
    
  }

  async randomItems(num: number){
    

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