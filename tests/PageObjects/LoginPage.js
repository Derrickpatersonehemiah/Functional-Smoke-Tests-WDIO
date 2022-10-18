class LoginPage
{

    get Username()
    {
        return $("")
    }
    get Password()
    {
       return $("")
    }
    get LoginButton()
    {
       return $("")
    }
    
    async Login(username,password)
    {
        await this.Username.setValue(username)
        await this.Password.setValue(password)
        await this.LoginButton.click()
        //await browser.setTimeout({ 'pageLoad': 30000 })
    }




}

module.exports =new LoginPage()