import { Locator, Page } from '@playwright/test';

class InventoryPageLocators{
    public item1: Locator;
    public item2: Locator;
    public item3: Locator;
    public itemlocators: Locator;
    public cartLink: Locator;

    constructor(page: Page){
        this.item1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.item2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.item3 = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.itemlocators = page.locator('[data-test^="add-to-cart-"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }
}

export default InventoryPageLocators;
