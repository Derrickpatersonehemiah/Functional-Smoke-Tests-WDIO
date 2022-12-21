const AdminPage = require('../PageObjects/AdminPage')
const Common = require('../PageObjects/Common')
const LoginPage = require('../PageObjects/LoginPage')
const TestData = require('../PageObjects/TestData')

describe('Admin Functional Tests', async()=>
{

////----Search Test------////

it('Login to Admin Module', async()=>
{
 await browser.maximizeWindow()  
 await browser.url("/")
 await LoginPage.Login(TestData.username,TestData.password)
 await Common.Logo.waitForDisplayed()
 await Common.Adminlink.click()
})

it('Verify Search by Existing Usernames', async()=>
{
 try{
    const val=TestData.SearchValidUsrNames
    await AdminPage.VerifyUserNameSearch(val)
    }catch(excption){
    await AdminPage.SearchResetBtn.click()
    throw excption
 }
})

it('Verify Search by Non Existing Usernames', async()=>
{
 try{
    const val=TestData.SearchInvalidUsrNames
    await AdminPage.VerifyUserNameSearch(val)
    }catch(excption){
    await AdminPage.SearchResetBtn.click()
    throw excption
 }
})

it('Verify Search by Existing Employee Names', async()=>
{
 try{
    const val=TestData.SearchValidEmpNames
    await AdminPage.VerifyEmployeeNameSearch(val)
   }catch(excption){
   await AdminPage.SearchResetBtn.click()
   throw excption
 }
})

it('Verify Search by Non Existing Employee Names', async()=>
{
 try{
    var values=TestData.SearchInvalidEmpNames
    await AdminPage.VerifyEmployeeNameSearch(values)
    }catch(excption){
    await AdminPage.SearchResetBtn.click()
    throw excption
 }
})

it('User Roles dropdown Selection Verification', async()=>
{
 try{
     await AdminPage.VerifyUserRoleOptions()
    }catch(excption){
    await AdminPage.SearchResetBtn.click()
    throw excption
    }
})

it('Verify Search by changing User Roles', async()=>
{
 try{
     var values=TestData.SearchUsrRoles
     await AdminPage.VerifyUserRoleSearch(values)
    }catch(excption){
    await AdminPage.SearchResetBtn.click()
    throw excption
    }
})

/////------//////

})    