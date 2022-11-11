const { default: clearValue } = require('webdriverio/build/commands/element/clearValue')
const LoginPage = require('../PageObjects/LoginPage')
const TestData = require('../PageObjects/TestData')

describe('Login Page Functional Tests', async()=>
{

it(' Verify Page',async()=>
{
  await browser.url("/")
  await expect(browser).toHaveUrlContaining(LoginPage.LoginPageUrl)

})

it(' Verify alert by proceeding without username',async()=>
{
  await LoginPage.Login("",TestData.password)
  await LoginPage.VerifyFieldAlert()
  await browser.url(LoginPage.LoginPageUrl)
  
})

it(' Verify alert by proceeding without password',async()=>
{
  await LoginPage.Login(TestData.username,"")
  await LoginPage.VerifyFieldAlert()
  await browser.url(LoginPage.LoginPageUrl)
})
  
it(' Verify alerts by logging in with invalid usernames and valid password',async()=>
{
  var val = TestData.InvalidUsernames
  for(let i=0;i<val.length;i++)
  {
    await LoginPage.Login(val[i],TestData.password)
    await LoginPage.VerifyLoginAlert()
  }
  await browser.url(LoginPage.LoginPageUrl)
})

it(' Verify alerts by logging in with valid username and invalid passwords',async()=>
{
  var val = TestData.InvalidPasswords
  for(let i=0;i<val.length;i++)
  {
    await LoginPage.Login(TestData.Username,val[i])
    await LoginPage.VerifyLoginAlert()
  }
  await browser.url(LoginPage.LoginPageUrl)
})

it(' Verify alerts by logging in with invalid usernames and invalid passwords',async()=>
{
  var usr = TestData.InvalidUsernames
  var pass =Testdata.InvalidPasswords
  for(let i=0;i<usr.length;i++)
  {
    await LoginPage.Login(usr[i],pass[i])
    await LoginPage.VerifyLoginAlert()
  }
})

it(' Verify access of "Forgot password" page',async()=>
{
   await LoginPage.ForgotPassword.click()
   await expect(browser).toHaveUrlContaining(LoginPage.ForgotPassPageUrl)

})

it(' Verify "Reset password" by proceeding with no username',async()=>
{
   await LoginPage.LoginButton.click()
   await LoginPage.VerifyFieldAlert()

})

it(' Verify "Reset password" by proceeding with invalid username',async()=>
{
   await LoginPage.Username.click()
   await LoginPage.Username.setValue("@#@%#^%^")
   await LoginPage.VerifyLoginAlert()
   await LoginPage.Username.clearValue()
})

it(' Verify "Reset password" by proceeding with valid username',async()=>
{ 
  try
  {
   await LoginPage.Username.click()
   await LoginPage.Username.setValue(TestData.username)
   await LoginPage.LoginButton.click()
   await expect(browser).toHaveUrlContaining(LoginPage.ResetPassUrl)
   await expect(LoginPage.ResetPassPageTitle).toHaveText("Reset Password link sent successfully")
   await browser.url(LoginPage.ForgotPassPageUrl)
  }
  catch(excption){
    await browser.url(LoginPage.ForgotPassPageUrl)
    throw excption
  }
})

it(' Verify "Reset password" by clicking on cancel',async()=>
{
  try
  {
   await LoginPage.Username.click()
   await LoginPage.Username.setValue(TestData.username)
   await LoginPage.ForgotPassCancelBtn.click()
   await expect(browser).toHaveUrlContaining(LoginPage.LoginPageUrl)
  }
  catch(excption){
    await browser.url(LoginPage.LoginPageUrl)
    throw excption
  }
})

it(' Verify function of "OrangeHrm link" ',async()=>
{
  try
  {
  await LoginPage.OrangehrmLinkBtn.waitForDisplayed()
  await LoginPage.OrangehrmLinkBtn.click()
  await expect(browser).toHaveUrlContaining(LoginPage.OrangehrmUrl)
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  await browser.url(LoginPage.LoginPageUrl)
  throw excption
}
})

it(' Verify function of "OrangeHrm LinkedIn link" ',async()=>
{
  try
  {
  await LoginPage.OrangeLinkedinLinkBtn.waitForDisplayed()  
  await LoginPage.OrangeLinkedinLinkBtn.click()
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeLinkedinUrl)
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  await browser.url(LoginPage.LoginPageUrl)
  throw excption
}
})

it(' Verify function of "OrangeHrm FB link" ',async()=>
{
  try
  {
  await LoginPage.OrangeFBLinkBtn.waitForDisplayed()  
  await LoginPage.OrangeFBLinkBtn.click()
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeFBUrl)
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  await browser.url(LoginPage.LoginPageUrl)
  throw excption
}
})

it(' Verify function of "OrangeHrm Twitter link" ',async()=>
{
  try
  {
  await LoginPage.OrangeTwitterLinkBtn.waitForDisplayed()  
  await LoginPage.OrangeTwitterLinkBtn.click()
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeTwitterUrl)
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  await browser.url(LoginPage.LoginPageUrl)
  throw excption
}
})

it(' Verify function of "OrangeHrm Youtube link" ',async()=>
{
  try
  {
  await LoginPage.OrangeYoutubeLinkBtn.waitForDisplayed()
  await LoginPage.OrangeYoutubeLinkBtn.click()
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeYoutubeUrl)
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  await browser.url(LoginPage.LoginPageUrl)
  throw excption
}
})

it(' Verify by Logging in with valid Credentials',async()=>
{
  await LoginPage.Login(LoginPage.Username,LoginPage.Password)
  await expect(browser).toHaveUrlContaining(LoginPage.postloginUrl)
})

})









