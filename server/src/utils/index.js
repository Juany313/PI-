const infoCleaner = (arr) => arr.map((driver)=>{
    return {
        id: driver.id,
        name:driver.name,
        description:driver.description,
        image:driver.image,
        nationality:driver.nationality,
        dob:driver.dob,
        teams:driver.teams,
        created: false
    }
});

module.exports={
    infoCleaner
        
}

