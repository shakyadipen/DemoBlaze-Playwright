export class CartPage{
        constructor(page){
            this.page=page;
            this.placeOrder="//button[normalize-space()='Place Order']";
            this.name="//input[@id='name']";
            this.country="//input[@id='country']";
            this.city="//input[@id='city']";
            this.creditCard="//input[@id='card']";
            this.month="//input[@id='month']";
            this.year="//input[@id='year']";
            this.purchaseButton="//button[normalize-space()='Purchase']";
            this.verifyPurchase="//h2[normalize-space()='Thank you for your purchase!']";
            this.clickOk="//button[normalize-space()='OK']";
           
        }
        async verifyPlaceOrder(){
            return await this.page.isVisible(this.placeOrder);
        }
        async clickPlaceOrder(){
        await this.page.click(this.placeOrder);
            
        }
        async fillPage(){
            await this.page.fill(this.name,"Test");
            await this.page.fill(this.country,"USA");
            await this.page.fill(this.city,"kathmandu");
            await this.page.fill(this.creditCard,"1234567890");
            await this.page.fill(this.month,"12");
            await this.page.fill(this.year,"2024");
            await this.page.click(this.purchaseButton);
            
        }
        async verifyPurchaseSuccess(){
            return await this.page.isVisible(this.verifyPurchase);
        }
        async clickOnOk(){
            await this.page.click(this.clickOk);
        }
    }

