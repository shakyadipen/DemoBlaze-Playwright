export class HomePage{
        constructor(page){
            this.page=page;
            this.cardList=".card-block";
            this.addToCartButton="//a[normalize-space()='Add to cart']";
            this.gotoCartLink="//a[normalize-space()='Cart']";
        }
        async clickItem(inputPhoneName){
           // await this.page.waitForSelector(this.cardList);  
            const listItems=await this.page.$$(this.cardList);
            for(const items of listItems){
                
                const phoneTitle = await items.$(".card-title");
                 const phoneName = await phoneTitle.textContent();
                console.log("The phone names are", phoneName);
                    if(phoneName.includes(inputPhoneName)){
                            await phoneTitle.click();
                                break;
                    }
            }
        }
        async clickAddToCart(){
            await this.page.click(this.addToCartButton);
        }
        async acceptDialog(){
            this.page.on('dialog', async dialog => {
          
                await expect(dialog.message()).toContain('Product added.');
                 await dialog.accept("Shakya");//close by using ok button
  //await dialog.dismiss();//close by using cancel button
});
            }
            async gotoCart(){
                await this.page.click(this.gotoCartLink);
            }
            
        }

