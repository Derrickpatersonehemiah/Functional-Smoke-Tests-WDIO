const TestData = require('../PageObjects/TestData')
const NPane = require('../PageObjects/NPane')

class Common
{

get Logo()
{
    return $("img[alt='client brand banner']")
}    

get breadcrumb()
{
    return $(".oxd-topbar-header-breadcrumb")
}

get Userdrpdwn()
{
    return $(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon")
}

get UsrdrpdwnMenu()
{
    return $("ul[role='menu']")
}

get AdminPermissionform()
{
    return $(".oxd-form")
}

async Authenticate()
{
    const usrname = $("input[name='username']")
    const pwd = $("input[name='password']")
    await usrname.waitForDisplayed()
    await usrname.setValue(TestData.username)
    await pwd.waitForDisplayed()
    await pwd.setValue(TestData.password)
    await $("button[type='submit']").click()
    await NPane.MainpageLogo.waitForDisplayed()
}


}

module.exports =new Common()