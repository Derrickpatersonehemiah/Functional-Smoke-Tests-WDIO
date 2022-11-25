const AdminPage = require('../PageObjects/AdminPage')
const Common = require('../PageObjects/Common')
const LoginPage = require('../PageObjects/LoginPage')
const TestData = require('../PageObjects/TestData')

describe('Admin Functional Tests', async()=>
{

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
    var values=TestData.SearchValidUsrNames
    await AdminPage.VerifyUserNameSearch(values)
    }catch(excption){
    await AdminPage.SearchResetBtn.click()
    throw excption
 }
})

it('Verify Search by Non Existing Usernames', async()=>
{
 try{
    var values=TestData.SearchInvalidUsrNames
    await AdminPage.VerifyUserNameSearch(values)
    }catch(excption){
    await AdminPage.SearchResetBtn.click()
    throw excption
 }
})

it('Verify Search by Existing Employee Names', async()=>
{
 try{
    var values=TestData.SearchValidEmpNames
    await AdminPage.VerifyEmployeeNameSearch(values)
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


})    