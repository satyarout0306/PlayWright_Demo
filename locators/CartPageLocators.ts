import { Locator, Page } from '@playwright/test';

class CartPageLocators{
    public checkoutButton: Locator;
    public pageTitle_cart: Locator;

    constructor(page: Page){
        this.pageTitle_cart = page.locator('[data-test="title"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

}

export default CartPageLocators;