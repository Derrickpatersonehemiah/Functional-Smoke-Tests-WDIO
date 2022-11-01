const LoginPage = require('../PageObjects/LoginPage')
const TestData = require('../PageObjects/TestData')
const Common = require('../PageObjects/Common')
const AdminPage = require('../PageObjects/AdminPage')

describe('Admin Module Smoke Test', async()=>
{

it('Login to Admin Module', async()=>
{
 await browser.url("/")
 expect(browser).toHaveTitle('OrangeHRM')
 await LoginPage.Login()
 await Common.Adminlink.click()
})

it('Add User Check', async()=>
{
await AdminPage.AddUser()
})

it('Delete User Check', async()=>
{
 
})

it('Edit User Check', async()=>
{
 


})

})