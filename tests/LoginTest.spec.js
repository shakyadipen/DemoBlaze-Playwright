import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
//import { HomePage } from '../Pages/HomePage';
//const login= new LoginPage(page);

test.beforeEach(async ({ page }) => {
 
    const login= new LoginPage(page);
    await login.gotoLoginPage();

});
test.afterEach(async ({ page }) => {
await page.close();
});
test('Login With Valid Credentials', async ({ page }) => {
    const login = new LoginPage(page);
   // const home=new HomePage(page);
    //perform login
    await login.loginWithCredentials("rest123", "Test@123");
    expect(login.isLogoutVisible()).toBeTruthy();
  
//Home Test
 await page.waitForTimeout(3000);
// await home.clickItem("Samsung galaxy s6");

 
});