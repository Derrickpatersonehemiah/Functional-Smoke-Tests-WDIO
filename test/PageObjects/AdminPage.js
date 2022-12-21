const Common = require("./Common")
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

//------Search User---------

get SearchUsrVisiblity()
{
    return $(".oxd-icon.bi-caret-up-fill")
}

get SearchUsrName()
{
    return $("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']")
}

get SearchUsrRoledrpdwn()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)")
}

get SearchUsrRoleValue()
{
    return $("div[class='oxd-table-filter-area'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)")
}

get SearchStatusdrpdwn()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)")
}

get SearchResetBtn()
{
    return $("button[class='oxd-button oxd-button--medium oxd-button--ghost']")
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

get OnSelected()
{
    return "oxd-select-option --selected"
}

get usrname()
{
    return $("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']")
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



async EmpNameSelection(empValue,optNo)
{   
 await this.EmpName.setValue(empValue)
 await this.ListBox.waitForDisplayed()
 await $("//div[text()='Searching....']").waitForDisplayed()
 if(empValue.length > 30)
 {
   await expect(Common.Alert).toHaveTextContaining("Invalid Parameter")
 }else{
 await $("//div[text()='Searching....']").waitForDisplayed({reverse: true})
 const selection = $(`div:nth-child(${optNo})[role='option']`)
 await selection.waitForDisplayed()
 await selection.click()
 await selection.waitForDisplayed({reverse: true})
 await this.ListBox.waitForDisplayed({reverse: true})
  }
}

async SelectSearchUsrRole(role)
{
  await this.SearchUsrVisiblity.waitForDisplayed()
  await this.SearchUsrRoledrpdwn.click()
  await this.ListBox.waitForDisplayed() 
  if(role == "Admin")
  {
    await this.UsrRoleAdmin.click()
    await this.ListBox.waitForDisplayed({ reverse: true })
  }else if(role == "ESS")
  {
    await this.UsrRoleESS.click()
    await this.ListBox.waitForDisplayed({ reverse: true })
  }
  
}

async VerifyUserRoleOptions()
{
    await this.SelectSearchUsrRole("Admin")
    await expect(this.SearchUsrRoleValue).toHaveTextContaining("Admin")
    await this.SearchResetBtn.click()
    await this.SelectSearchUsrRole("ESS")
    await expect(this.SearchUsrRoleValue).toHaveTextContaining("ESS")
    await this.SearchResetBtn.click()
    await expect(this.SearchUsrRoleValue).toHaveTextContaining("-- Select --")
}

async VerifyUserRoleSearch(values)
{   
    await this.SearchUsrVisiblity.waitForDisplayed()
    for(let i=0;i<values.length;i++)
    {
     await this.SelectSearchUsrRole(values[i])
     await this.SubmitBtn.click()
     await Common.VerifyUsrRoleResults(values[i])
     await this.SearchResetBtn.click()
    }
    
    
}

async VerifyUserNameSearch(val)
{
    await this.SearchUsrVisiblity.waitForDisplayed()
    for(let i=0;i<val.length;i++)
    {
     await this.SearchUsrName.setValue(val[i])
     await this.SubmitBtn.click()
     await Common.VerifyUsrNameResults(val[i])
     await this.SearchResetBtn.click()
    }
}

async VerifyEmployeeNameSearch(val)
{
   await this.SearchUsrVisiblity.waitForDisplayed()
   for(let i=0;i<val.length;i++)
   {
 await this.EmpName.setValue(val[i])
 await this.ListBox.waitForDisplayed()
 await $("//div[text()='Searching....']").waitForDisplayed()
 if(val[i].length > 30)
 {
   await expect(Common.Alert).toHaveTextContaining("Invalid Parameter")
 }else{
 await $("//div[text()='Searching....']").waitForDisplayed({reverse: true})
 const selection = $("div:nth-child(1)[role='option']")
 await selection.waitForDisplayed()
 var res = await selection.getText()
 await selection.click()
 await selection.waitForDisplayed({reverse: true})
 await this.ListBox.waitForDisplayed({reverse: true})
 await this.SubmitBtn.waitForDisplayed()
 await this.SubmitBtn.click()
 await Common.VerifyEmpNameResults(res)
 await this.SearchResetBtn.click()
   }
}
}

async AddUser()
{
 var date = String(Date())
 var currtime = date.substring(0, 28)
 await this.AddUserbtn.waitForDisplayed()
 await this.AddUserbtn.click()
 await this.ActionTitle.waitForDisplayed()
 await this.EmpNameSelection("h","1")
 await this.UserRoledrpdwn.click()
 await this.ListBox.waitForDisplayed()
 await this.UsrRoleAdmin.click()
 await this.Statusdrpdwn.click()
 await this.ListBox.waitForDisplayed()
 await this.StatusEnabled.click()
 await this.usrname.clearValue()
 await this.usrname.setValue("TestUser"+currtime)
 await Common.FieldAlert.waitForDisplayed({ reverse: true })
 await this.passwd.clearValue()
 await this.passwd.setValue(TestData.dataPasswd)
 await this.confirmpasswd.setValue(TestData.dataPasswd)
 await this.confirmpassMsg.waitForDisplayed({ reverse: true })
 await this.SubmitBtn.click()
}







}

module.exports =new AdminPage()    