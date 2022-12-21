const LoginPage = require('../PageObjects/LoginPage')
const TestData = require('../PageObjects/TestData')
const Common = require('../PageObjects/Common')

describe('App Surface Smoke Test', async()=>
{
  
it('Login check',async()=>
{
    await browser.url("/")
    expect(browser).toHaveTitle('OrangeHRM')
    await LoginPage.Login(TestData.username,TestData.password)
})

it('Post Login Page Check',async()=>
{
  await Common.Logo.waitForDisplayed()
  await expect(browser).toHaveUrl(LoginPage.postloginUrl)
  await expect(Common.Logo).toBeClickable()
})

it('Search Check ',async()=>
{
  const searchValue = Common.SearchBar
  await searchValue.setValue("Admin")
  await Common.PIMlink.waitForDisplayed({ reverse: true })
  await Common.Adminlink.waitForDisplayed()
})

it('Modules Access Check ',async()=>
{
  await browser.refresh()
  var i=0
  const len = TestData.Pages.length
  for(i;i<len;i++)
  {
    await Common.ModulesCheck(i)
  }
  await Common.ChkMaintainance()
})

it('User Menu Check ',async()=>
{
  var values = TestData.UsrdrpdwMenuContents
  await Common.UserdrpdwnElmsCheck(values)
})

})
