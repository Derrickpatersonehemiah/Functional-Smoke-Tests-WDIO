const LoginPage = require('../PageObjects/LoginPage')
const MainPage = require('../PageObjects/NPane')
const TestData = require('../PageObjects/TestData')
const fs = require('fs')

describe('Login Functional Tests', async()=>
{
  
it(' Verify alerts by logging in with invalid credentials',async()=>
{
    await browser.url("/")
    await LoginPage.Login()
})

it(' Verify by Logging in with valid Credentials',async()=>
{
  await LoginPage.Login(LoginPage.Username,LoginPage.Password)
})

it(' Verify function of "Forgot password" ',async()=>
{
  
})

it(' Verify function of "OrangeHrm link" ',async()=>
{
  
})

})



