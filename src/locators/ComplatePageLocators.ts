import { Locator, Page } from '@playwright/test';

class CompletePageLocators{
    public backToProductsButton: Locator;
    public menuButton: Locator;
    public logoutLink: Locator;

    constructor(page: Page){
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    }
}

export default CompletePageLocators;
