const TestData = require('../PageObjects/TestData')
const Common = require('./Common')
const NPane = require('./NPane')

class LoginPage
{

    get Username()
    {
        return $("input[placeholder='Username']")
    }

    get Password()
    {
       return $("input[placeholder='Password']")
    }

    get LoginButton()
    {
       return $("button[type='submit']")
    }

    get postloginUrl()
    {
        return ['https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList']
    }
    
    async Login()
    {
        await this.Username.setValue(TestData.username)
        await this.Password.setValue(TestData.password)
        await this.LoginButton.click()
        await Common.Logo.waitForDisplayed()
        //await browser.setTimeout({ 'pageLoad': 30000 })
    }




}

module.exports =new LoginPage()