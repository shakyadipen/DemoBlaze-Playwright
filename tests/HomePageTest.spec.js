import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { CartPage } from '../Pages/CartPage';
import { LogoutPage } from '../Pages/LogoutPage';
import {userData} from '../Utils/TestData.js';


test.beforeEach(async ({ page }) => {
    const login= new LoginPage(page);
    await login.gotoLoginPage();
   
});
test.afterEach(async ({ page }) => {
await page.close();
});
test('Test Complete user flow-login-addtocart-logout', async ({ page }) => {
    const home = new HomePage(page);
    const login= new LoginPage(page);
    const cart=new CartPage(page);
    const logout=new LogoutPage(page);
     await login.loginWithCredentials(userData.validUser.username,userData.validUser.password);
    await page.waitForTimeout(3000);
    expect(await login.isLogoutVisible()).toBeTruthy();
    await page.waitForTimeout(3000);
    //perform login
    await home.clickItem(userData.productDetails.productName);

    await home.clickAddToCart();
    await page.waitForTimeout(3000);
    await home.acceptDialog();
     await page.waitForTimeout(5000);
     await home.gotoCart();

     //Verify place order button is visible
     expect(await cart.verifyPlaceOrder()).toBeTruthy();
    //click on place order button
     await cart.clickPlaceOrder();
      //await page.waitForTimeout(3000);
      //Fill details in the form
      await cart.fillPage();
      await cart.verifyPurchaseSuccess();
      await cart.clickOnOk();

      //logout 
      //await page.waitForTimeout(3000);
      expect(await logout.isLogoutVisible({timeout:800000}));
      await logout.gotoLogoutLink();
      expect(await logout.isLoginVisible()).toBeTruthy();

  // Expect a title "to contain" a substring.
 
});
test.skip('Fill the form in cart page',async({page})=>{
    const home = new HomePage(page);
    const login= new LoginPage(page);
    const cart=new CartPage(page);
    await login.loginWithCredentials("rest123","Test@123");
    await page.waitForTimeout(3000);
    expect(await login.isLogoutVisible()).toBeTruthy();

    await home.gotoCart;
    await page.waitForTimeout(3000);
    await cart.clickPlaceOrder();
    
    await cart.fillPage();

      
    
    
    })