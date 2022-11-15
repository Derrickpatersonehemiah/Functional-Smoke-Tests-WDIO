class TestData
{

get username()
{
    return "Admin"
}

get password()
{
    return "admin123"
}

get dataPasswd()
{
    return "TestUser@321"
}

get ModuleNames()
{
    return ["Admin","PIM","Leave","Time","Recruitment","PIM","Performance","Dashboard","Directory","Buzz"]
}

get Pages()
{
    return ["admin","pim","leave","time","recruitment","pim","performance","dashboard","directory","buzz"] 
}

get ModuleActions()
{
    return ["viewAdminModule","viewPimModule","viewLeaveModule","viewTimeModule","viewRecruitmentModule","viewMyDetails","viewPerformanceModule","index","viewDirectory","viewBuzz"] 
}

get UsrdrpdwMenuContents()
{
    return ["About","Support","Change Password","Logout"]
}

get InvalidUsernames()
{
    return ["adimn","admin123","ADMINI","@234","aDmin"]
}

get InvalidPasswords()
{
    return ["admin","ADMIN123","123admin","#%53","aDmin123"]
}

get blank()
{
    return [""]
}


    
}

module.exports = new TestData()