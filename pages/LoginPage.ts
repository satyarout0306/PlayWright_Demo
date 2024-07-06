import { expect, Page } from '@playwright/test';
import LoginPageLocators from '../locators/LoginPageLocators';

class LoginPage {
  private page: Page;
  private locators: LoginPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LoginPageLocators(page);
  }

  async enterCredentails(username: string, password: string) {
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
  }
  async login(){
    await this.locators.loginButton.click();
  }
  async validateLoginSuccess(){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }

  async validateLoginFailure(){
    const errorMessage = await this.page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain('Epic sadface');
  }


}

export default LoginPage; 