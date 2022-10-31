const TestData = require('../PageObjects/TestData')


class Common
{

get Logo()
{
    return $("img[alt='client brand banner']")
}   

get Adminlink()
{
    return $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)")
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


}

module.exports =new Common()