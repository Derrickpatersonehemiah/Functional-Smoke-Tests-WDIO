const TestData = require('../PageObjects/TestData')
const Common = require('../PageObjects/Common')

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

    get LoginAlerts()
    {
        return $(".oxd-text.oxd-text--p.oxd-alert-content-text")
    }

    get ForgotPassword()
    {
        return $(".oxd-text.oxd-text--p.orangehrm-login-forgot-header")
    }

    get ForgotPassPageUrl()
    {
        return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    }

    get ForgotPassCancelBtn()
    {
        return $("button[type='button']")
    }

    get ResetPassUrl()
    {
        return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset"
    }

    get ResetPassPageTitle()
    {
        return $(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title")
    }

    get LoginPageUrl()
    {
        return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    }

    get OrangehrmLinkBtn()
    {
        return $("a[href='http://www.orangehrm.com']")
    }

    get OrangehrmUrl()
    {
        return "https://www.orangehrm.com/"
    }

    get OrangeLinkedinLinkBtn()
    {
        return $("//a[@href='https://www.linkedin.com/company/orangehrm/mycompany/']//*[name()='svg']")
    }

    get OrangeLinkedinUrl()
    {
        return "https://www.linkedin.com/company/orangehrm"
    }

    get OrangeFBLinkBtn()
    {
        return $("//a[@href='https://www.facebook.com/OrangeHRM/']//*[name()='svg']")
    }

    get OrangeFBUrl()
    {
        return "https://www.facebook.com/OrangeHRM/"
    }

    get OrangeTwitterLinkBtn()
    {
        return $("//a[@href='https://twitter.com/orangehrm?lang=en']//*[name()='svg']")
    }

    get OrangeTwitterUrl()
    {
        return "https://twitter.com/orangehrm?lang=en"
    }

    get OrangeYoutubeLinkBtn()
    {
        return $("//a[@href='https://www.youtube.com/c/OrangeHRMInc']//*[name()='svg']")
    }

    get OrangeYoutubeUrl()
    {
        return "https://www.youtube.com/c/OrangeHRMInc"
    }

    get postloginUrl()
    {
        return "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    }

    
    async Login(usr,pass)
    {
        await expect(browser).toHaveTitle('OrangeHRM')
        await this.Username.click()
        await this.Username.setValue(usr)
        await this.Username.click()
        await this.Password.setValue(pass)
        await this.LoginButton.click()
         //await browser.setTimeout({ 'pageLoad': 30000 })
    }

    async PopulateLoginFields(usr,pass)
    {
        await this.Username.click()
        await this.Username.setValue(usr)
        await this.Password.click()
        await this.Password.setValue(pass)
    }
    
    async VerifyLogin(usr,ps)
    {
        const BrwUrl = await browser.getUrl()
        if(BrwUrl == this.postloginUrl)
        {
          await expect(usr).toEqual(TestData.username)
          await expect(ps).toEqual(TestData.password)
        }else{
        await this.LoginAlerts.waitForDisplayed()
        await expect(this.LoginAlerts).toHaveText("Invalid credentials")
        }
    }

    async VerifyFieldAlert()
    {
        await Common.FieldAlert.waitForDisplayed()
        await expect(Common.FieldAlert).toHaveText("Required")
    }



}

module.exports =new LoginPage()