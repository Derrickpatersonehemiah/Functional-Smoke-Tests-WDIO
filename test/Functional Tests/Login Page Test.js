const Common = require('../PageObjects/Common')
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
  try
  {
  var val = TestData.InvalidUsernames
  for(let i=0;i<val.length;i++)
  {
    await LoginPage.PopulateLoginFields(val[i],TestData.password)
    await LoginPage.LoginButton.click()
    await LoginPage.VerifyLogin(val[i],TestData.password)
  }
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  const BrwUrl = await browser.getUrl()
  if(await BrwUrl == LoginPage.postloginUrl)
  {
    await Common.Logout()
  }else{
    await browser.url(LoginPage.LoginPageUrl)
  }
  throw excption
}
})

it(' Verify alerts by logging in with valid username and invalid passwords',async()=>
{
  try
  {
  var val = TestData.InvalidPasswords
  for(let i=0;i<val.length;i++)
  {
    await LoginPage.PopulateLoginFields(TestData.username,val[i])
    await LoginPage.LoginButton.click()
    await LoginPage.VerifyLogin(TestData.username,val[i])
  }
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  const BrwUrl = await browser.getUrl()
  if(await BrwUrl == LoginPage.postloginUrl)
  {
    await Common.Logout()
  }else{
    await browser.url(LoginPage.LoginPageUrl)
  }
  throw excption
}
})

it(' Verify alerts by logging in with invalid usernames and invalid passwords',async()=>
{
  try
  {
  var usr = TestData.InvalidUsernames
  var pass =TestData.InvalidPasswords
  for(let i=0;i<usr.length;i++)
  {
    await LoginPage.PopulateLoginFields(usr[i],pass[i])
    await LoginPage.LoginButton.click()
    await LoginPage.VerifyLogin(usr[i],pass[i])
  }
  await browser.url(LoginPage.LoginPageUrl)
}
catch(excption){
  const BrwUrl = await browser.getUrl()
  if(await BrwUrl == LoginPage.postloginUrl)
  {
    await Common.Logout()
  }else{
    await browser.url(LoginPage.LoginPageUrl)
  }
  throw excption
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
   await browser.url(LoginPage.ForgotPassPageUrl)

})

it(' Verify "Reset password" by proceeding with invalid username',async()=>
{
  try{
   await LoginPage.Username.click()
   await LoginPage.Username.setValue("@#@%#^%^")
   await LoginPage.LoginButton.click()
   await LoginPage.VerifyLogin()
   await browser.url(LoginPage.ForgotPassPageUrl)
  }catch(excption)
  {
    await browser.url(LoginPage.ForgotPassPageUrl)
    throw excption
  }
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
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[1])
  await expect(browser).toHaveUrlContaining(LoginPage.OrangehrmUrl)
  await browser.switchToWindow(window[0])
}
catch(excption){
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[0])
  throw excption
}
})

it(' Verify function of "OrangeHrm LinkedIn link" ',async()=>
{
  try
  {
  await LoginPage.OrangeLinkedinLinkBtn.waitForDisplayed()  
  await LoginPage.OrangeLinkedinLinkBtn.click()
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[2])
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeLinkedinUrl)
  await browser.switchToWindow(window[0])
}
catch(excption){
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[0])
  throw excption
}
})

it(' Verify function of "OrangeHrm FB link" ',async()=>
{
  try
  {
  await LoginPage.OrangeFBLinkBtn.waitForDisplayed()  
  await LoginPage.OrangeFBLinkBtn.click()
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[3])
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeFBUrl)
  await browser.switchToWindow(window[0])
}
catch(excption){
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[0])
  throw excption
}
})

it(' Verify function of "OrangeHrm Twitter link" ',async()=>
{
  try
  {
  await LoginPage.OrangeTwitterLinkBtn.waitForDisplayed()  
  await LoginPage.OrangeTwitterLinkBtn.click()
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[4])
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeTwitterUrl)
  await browser.switchToWindow(window[0])
}
catch(excption){
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[0])
  throw excption
}
})

it(' Verify function of "OrangeHrm Youtube link" ',async()=>
{
  try
  {
  await LoginPage.OrangeYoutubeLinkBtn.waitForDisplayed()
  await LoginPage.OrangeYoutubeLinkBtn.click()
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[5])
  await expect(browser).toHaveUrlContaining(LoginPage.OrangeYoutubeUrl)
  await browser.switchToWindow(window[0])
}
catch(excption){
  const window = await browser.getWindowHandles()
  await browser.switchToWindow(window[0])
  throw excption
}
})

it(' Verify by Logging in with valid Credentials',async()=>
{
  await LoginPage.Login(TestData.username,TestData.password)
  await expect(browser).toHaveUrlContaining(LoginPage.postloginUrl)
})

})









