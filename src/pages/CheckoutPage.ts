import { Page, Locator, expect } from '@playwright/test';
import CheckoutPageLocators from '../locators/CheckoutPageLocators';

class CheckoutPage {
  private page: Page;
  private locators: CheckoutPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new CheckoutPageLocators(page);
  }

  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.locators.firstNameInput.fill(firstName);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.postalCodeInput.fill(postalCode);
    await this.locators.continueButton.click();
  }

  async completeCheckout() {
    await expect(this.locators.pageTitle).toHaveText("Checkout: Overview");
    await this.locators.finishButton.click();
  }
}

export default CheckoutPage;