import { Locator, Page } from '@playwright/test';

class CheckoutPageLocators{
    public firstNameInput: Locator;
    public pageTitle:Locator;
    public lastNameInput: Locator;
    public postalCodeInput: Locator;
    public continueButton: Locator;
    public finishButton: Locator;

    constructor(page: Page){
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.pageTitle = page.locator('[data-test="title"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

}
export default CheckoutPageLocators;