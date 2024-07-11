import { test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import CompletePage from '../pages/CompletePage';
import { CREDENTIALS, USER_INFO, URLS } from '../utils/constants';
import { describe } from 'node:test';

test.describe('Customer product checkout flow', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let completePage: CompletePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    completePage = new CompletePage(page);

    await page.goto(URLS.loginPage);
  });

  test('successful checkout', async ({ page }) => {
    await loginPage.enterCredentails(CREDENTIALS.username, CREDENTIALS.password);
    await loginPage.login();
    console.log('Login is successful');
    await loginPage.validateLoginSuccess();

    await inventoryPage.addItemToCart();
    console.log('Items got added');
    await inventoryPage.goToCart();
    await inventoryPage.validateItemAddedToCart();
    

    await cartPage.proceedToCheckout();
    console.log('Proceed to checkout');

    await checkoutPage.fillCheckoutInformation(USER_INFO.firstName, USER_INFO.lastName, USER_INFO.postalCode);
    await checkoutPage.completeCheckout();
    console.log('Payment Done');
  
  });

  test.afterEach(async ({ page }) => {
    await completePage.backToProducts();
    await completePage.logout();
    console.log('User is successfully logged out');
    
  });
});