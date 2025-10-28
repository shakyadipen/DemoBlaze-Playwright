import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { CartPage } from '../Pages/CartPage';
import { LogoutPage } from '../Pages/LogoutPage';

test.describe.serial('Ecommerce Applciation Test',()=>{
    let page,loginpage,homepage,addtocartpage,logoutpage;
test.beforeAll(async({browser})=>{
    const context=await browser.newContext();
    page=await context.newPage();
    loginpage=new LoginPage(page);
    homepage=new HomePage(page);
    addtocartpage=new CartPage(page);
   logoutpage=new LogoutPage(page);
    
});

test("Login Test",async()=>{
    await loginpage.gotoLoginPage();
    await loginpage.loginWithCredentials("rest123","Test@123");
});
test("Add to Cart Test",async()=>{
    await homepage.clickItem("Samsung galaxy s6");
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
      await cart.veerifyPurchaseSuccess();
      await cart.clickOnOk();
});
});