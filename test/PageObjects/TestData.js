class TestData
{

get username()
{
    return ["Admin"]
}

get password()
{
    return ["admin123"]
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


    
}

module.exports = new TestData()