const LoginPage = require('../PageObjects/LoginPage')
const TestData = require('../PageObjects/TestData')
const Common = require('../PageObjects/Common')
const AdminPage = require('../PageObjects/AdminPage')


describe('Admin Module Smoke Test', async()=>
{

it('Login to Admin Module', async()=>
{
 await browser.maximizeWindow()  
 await browser.url("/")
 expect(browser).toHaveTitle('OrangeHRM')
 await LoginPage.Login(TestData.username,TestData.password)
 await Common.Logo.waitForDisplayed()
 await Common.Adminlink.click()
})

it('Add User Check', async()=>
{
 await AdminPage.AddUser()
 await Common.Alert.waitForDisplayed()
 await expect(Common.Alert).toHaveTextContaining('Successfully Saved')
 await Common.Adminlink.click()
})

it('Edit User Check', async()=>
{
 await AdminPage.EditUserbtn.click()
 await AdminPage.ActionTitle.waitForDisplayed()
 await AdminPage.EmpNameSelection("t","1")
 await AdminPage.SubmitBtn.click()
 await Common.Alert.waitForDisplayed()
 await expect(Common.Alert).toHaveTextContaining('Successfully Updated')
 await Common.Adminlink.click()

})

it('Delete User Check', async()=>
{
 await AdminPage.DeleteUserbtn.click()
 await AdminPage.DeleteConfirmBox.waitForDisplayed()
 await AdminPage.ConfirmDelete.click()
 await Common.Alert.waitForDisplayed()
 await expect(Common.Alert).toHaveTextContaining('Successfully Deleted')
 await Common.Adminlink.click()
 }

)



})