exports.LogoutPage=
class LogoutPage{
    constructor(page){
        this.page=page;
        this.logoutLink="#logout2";
       
        this.logoutVerify="#login2";

    }
    async gotoLogoutLink(){
        await this.page.click(this.logoutLink);
    }
    async isLogoutVisible(){
        return await this.page.isVisible(this.logoutLink);
    }
    async isLoginVisible(){
        return await this.page.isVisible(this.logoutVerify);
    }
}
