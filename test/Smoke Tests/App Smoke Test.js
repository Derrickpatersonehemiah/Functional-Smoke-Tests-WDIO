const LoginPage = require('../PageObjects/LoginPage')
const NPane = require('../PageObjects/NPane')
const TestData = require('../PageObjects/TestData')
const Common = require('../PageObjects/Common')

describe('Orange HRM Smoke Test', async()=>
{
  
it('Login Verification',async()=>
{
    await browser.url("/")
    expect(browser).toHaveTitle('OrangeHRM')
    await LoginPage.Login()
})

it('Post Login Page Check',async()=>
{
  await expect(browser).toHaveUrl(MainPage.postloginUrl)
  await expect(Common.Logo).toBeClickable()
})

it('Search Verification ',async()=>
{
  await NPane.SearchBar.setvalue("admin")
  await NPane.PIMlink.waitForDisplayed({ reverse: true })
  await NPane.Adminlink.waitForDisplayed()
})

it('Modules Verification ',async()=>
{
  var i=0
  for(i;i<=Common.ModuleLinks.length;i++)
  {
    await $(TestData.ModuleLinks[i]).click()
    if(Common.AdminPermissionform) 
    {
      await Common.Authenticate()
    }
    await expect(Common.breadcrumb).toHaveTextContaining(TestData.ModuleNames[i])
    await expect(browser).toHaveUrl(TestData.Pages[i])
  }
})

it('User Menu verification ',async()=>
{
  await Common.Userdrpdwn.click()
  await Common.UsrdrpdwnMenu.waitForDisplayed()
  await expect(Common.UserdrpdwnMenu).toHaveText(TestData.UrdrpdwMenuContents)
})

})
