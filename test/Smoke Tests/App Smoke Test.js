const LoginPage = require('../PageObjects/LoginPage')
const TestData = require('../PageObjects/TestData')
const Common = require('../PageObjects/Common')

describe('App Surface Smoke Test', async()=>
{
  
it('Login Verification',async()=>
{
    await browser.url("/")
    expect(browser).toHaveTitle('OrangeHRM')
    await LoginPage.Login()
})

it('Post Login Page Check',async()=>
{
  await expect(browser).toHaveUrl(LoginPage.postloginUrl)
  await expect(Common.Logo).toBeClickable()
})

it('Search Verification ',async()=>
{
  const searchValue = Common.SearchBar
  await searchValue.setValue("Admin")
  await Common.PIMlink.waitForDisplayed({ reverse: true })
  await Common.Adminlink.waitForDisplayed()
})

it('Modules Verification ',async()=>
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

it('User Menu verification ',async()=>
{
  var values = TestData.UsrdrpdwMenuContents
  await Common.UserdrpdwnElmsCheck(values)
})

})
