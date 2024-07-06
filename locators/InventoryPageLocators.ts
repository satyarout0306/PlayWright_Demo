import { Locator, Page } from '@playwright/test';

class InventoryPageLocators{
    public backpackAddToCartButton: Locator;
    public bikeLightAddToCartButton: Locator;
    public item3: Locator;
    public cartLink: Locator;

    constructor(page: Page){
        this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLightAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.item3 = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }
}

export default InventoryPageLocators;
