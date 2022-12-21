const TestData = require('../PageObjects/TestData')
const LoginPage = require('./LoginPage')
const chai = require('chai')

class Common
{

get Logo()
{
    return $("img[alt='client brand banner']")
}   

get Alert()
{
    return $("[class='oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text']")
}

get Adminlink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)")
}

get Table()
{
    return $(".orangehrm-container")
}

get TableRow()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")
}

get PIMlink()
{
    return $(".oxd-main-menu-item.active")
}

get Leavelink()
{
   return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)")
}

get Timelink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)")
}

get Recruitmentlink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)")
}

get MyInfolink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)")
}

get Performancelink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1)")
}

get Dashboardlink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(8) > a:nth-child(1)")
}

get Directorylink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1)")
}

get Maintainancelink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1)")
}

get Buzzlink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(11) > a:nth-child(1)")
}

get SearchBar()
{
    return $("input[placeholder='Search']")
}

get MaintainanceOpt()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1) > span:nth-child(2)")
}

get MainainanceUrl()
{
    return "https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee"
}

get breadcrumb()
{
    return $(".oxd-topbar-header-breadcrumb")
}

get Userdrpdwn()
{
    return $(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon")
}

get AdminPermissionform()
{
    return $(".orangehrm-card-container")
}

get UsrdrpdwnMenu()
{
    return $("ul[role='menu']")
}

get FieldAlert()
{
    return $(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message")
}

get AboutBtn()
{
    return $("//a[normalize-space()='About']")
}

get SupportBtn()
{
    return $("//a[normalize-space()='Support']")
}

get ChangePasswordBtn()
{
    return $("//a[normalize-space()='Change Password']")
}

get LogoutBtn()
{
    return $("//a[normalize-space()='Logout']")
}

get LoadingSymbol()
{
    return $(".oxd-loading-spinner")
}

get SearchUsrnameResult()
{
    return $("div[role='rowgroup'] div div:nth-child(1) div:nth-child(2) div:nth-child(1)")
}

get SearchResetBtn()
{
    return $("button[class='oxd-button oxd-button--medium oxd-button--ghost']")
}

async ModulesCheck(a)
{
   var pgname = TestData.Pages[a]
   var actions = TestData.ModuleActions[a]
   await browser.refresh()
   await $(`a[href$='/web/index.php/${pgname}/${actions}']`).waitForDisplayed()
   await $(`a[href$='/web/index.php/${pgname}/${actions}']`).click()
   await this.breadcrumb.waitForDisplayed()
   await expect(this.breadcrumb).toHaveTextContaining(TestData.ModuleNames[a])
   await expect(browser).toHaveUrlContaining(TestData.Pages[a])
}

async UserdrpdwnElmsCheck(values)
{
    await this.Userdrpdwn.click()
    await this.UsrdrpdwnMenu.waitForDisplayed()
    await $(`//a[.='About']`).waitForDisplayed()
    await expect($(`//a[.='About']`)).toHaveTextContaining(values[0])
    await expect($(`//a[.='Support']`)).toHaveTextContaining(values[1])
    await expect($(`//a[.='Change Password']`)).toHaveTextContaining(values[2])
    await expect($(`//a[.='Logout']`)).toHaveTextContaining(values[3])
}

async ChkMaintainance()
{
    await this.MaintainanceOpt.waitForDisplayed()
    await this.MaintainanceOpt.click()
    const pwd = $("input[name='password']")
    await pwd.waitForDisplayed()
    await pwd.setValue(TestData.password)
    await $("button[type='submit']").click()
    await this.Logo.waitForDisplayed()
    await expect(this.breadcrumb).toHaveTextContaining("Maintenance")
    await expect(browser).toHaveUrlContaining("maintenance")
}

async VerifyNoOfResults()
{
  const NoOfRows = $$(".oxd-table-card").length
  return NoOfRows
}

async UsernameDisplayed(){
    try{ 
      await this.SearchUsrnameResult.getText();
      return true;
    }catch(NoAlertException){
      return false;
    }
}

async RowsDisplayed(){
    try{ 
      await this.TableRow;
      return true;
    }catch(NoAlertException){
      return false;
    }
}

async VerifyUsrNameResults(val)
{
  await this.LoadingSymbol.waitForDisplayed({ reverse: true })
  await this.Table.waitForDisplayed()
  if(this.RowsDisplayed() == true )
  {
    expect(this.SearchUsrnameResult).toHaveTextContaining(val)
  }else{
    expect(this.Alert).toHaveTextContaining("No Records Found")
      }
}

async VerifyEmpNameResults(result)
{
  await this.LoadingSymbol.waitForDisplayed({ reverse: true })
  await this.Table.waitForDisplayed()
  if((result != "No Records Found"))
  {
    const EmpNameResults = await $$("div[role='rowgroup'] div div:nth-child(1) div:nth-child(4)")
    expect(EmpNameResults).toHaveTextContaining(result)
  }else{
    expect(this.FieldAlert).toHaveTextContaining("Invalid")
    }
}

async VerifyUsrRoleResults(val)
{
  await this.LoadingSymbol.waitForDisplayed({ reverse: true })
  await this.Table.waitForDisplayed()
  if(this.RowsDisplayed() == false)
  {
   expect(this.Alert).toHaveTextContaining(val)
  }else{
   const UsrRoleResults = await $("div[role='rowgroup'] div div:nth-child(1) div:nth-child(3) div:nth-child(1)")
   expect(UsrRoleResults).toHaveTextContaining(val)
   await this.SearchResetBtn.click()
   await this.LoadingSymbol.waitForDisplayed({ reverse: true })
   await UsrRoleResults.waitForDisplayed()
   const usrRoleval = await UsrRoleResults.getText()
   chai.expect(usrRoleval).to.contain.oneOf(["Admin","ESS"])
    }
}

async Logout()
{
    await this.Userdrpdwn.click()
    await this.UsrdrpdwnMenu.waitForDisplayed()
    await this.LogoutBtn.click()
    await LoginPage.LoginButton.waitForDisplayed()
}


}

module.exports =new Common()