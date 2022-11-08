const TestData = require("./TestData")

class AdminPage
{

//---Admin Page-----------    
get AddUserbtn()
{
    return $("button[class='oxd-button oxd-button--medium oxd-button--secondary']")
}

get AdminTable()
{
    return $("div[role='table']")
}

get SelectiveUserBlock()
{
    return $("div[role='table']")
}

get DeleteUserbtn()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > button:nth-child(1)")
}

get DeleteConfirmBox()
{
   return $("div[role='document']")
}

get ConfirmDelete()
{
   return $("button[class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']")
}

get EditUserbtn()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > button:nth-child(2)")
}

get Alert()
{
    return $("[class='oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text']")
}

//------Add User--------------
get SubmitBtn()
{
    return $("button[type='submit']")
}

get ActionTitle()
{
    return $(".oxd-text.oxd-text--h6.orangehrm-main-title")
}

get EmpName()
{
   return $("input[placeholder='Type for hints...']")
}

get ListBox()
{
   return $("div[role='listbox']")
}

get SelectNameSugg()
{
   return $("div:nth-child(1)[role='option']")
}

get UserRoledrpdwn()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)")
}

get UsrRoleAdmin()
{
    return $("div:nth-child(2)[role='option']")
}

get UsrRoleESS()
{
    return $("div:nth-child(3)[role='option']")
}

get Statusdrpdwn()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)")
}

get StatusEnabled()
{
    return $("div:nth-child(2)[role='option']")
}

get StatusDisabled()
{
    return $("div:nth-child(3)[role='option']")
}

get usrname()
{
    return $("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']")
}

get usrnameMsg()
{
    return $("div[class='oxd-form-row'] span[class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")
}

get passwd()
{
    return $("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']")
}

get confirmpasswd()
{
    return $("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']")
}

get confirmpassMsg()
{
    return $("div[class='oxd-form-row user-password-row'] div[class='oxd-grid-item oxd-grid-item--gutters'] span[class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")
}



async EmpNameSelection(empValue)
{
 await this.EmpName.setValue(empValue)
 await this.ListBox.waitForDisplayed()
 await $("div:nth-child(2)[role='option']").waitForDisplayed()
 await browser.pause(1000)
 await this.SelectNameSugg.click()
}


async AddUser()
{
 var date = String(Date())
 var currtime = date.substring(0, 28)
 await this.AddUserbtn.waitForDisplayed()
 await this.AddUserbtn.click()
 await this.ActionTitle.waitForDisplayed()
 await this.EmpNameSelection("h")
 await this.UserRoledrpdwn.click()
 await this.ListBox.waitForDisplayed()
 await this.UsrRoleAdmin.click()
 await this.Statusdrpdwn.click()
 await this.ListBox.waitForDisplayed()
 await this.StatusEnabled.click()
 await this.usrname.clearValue()
 await this.usrname.setValue("TestUser"+currtime)
 await this.usrnameMsg.waitForDisplayed({ reverse: true })
 await this.passwd.clearValue()
 await this.passwd.setValue(TestData.dataPasswd)
 await this.confirmpasswd.setValue(TestData.dataPasswd)
 await this.confirmpassMsg.waitForDisplayed({ reverse: true })
 await this.SubmitBtn.click()
}







}

module.exports =new AdminPage()    