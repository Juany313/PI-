const infoCleaner = (arr) => arr.map((user)=>{
    return {
        id: user.id,
        name:user.name,
        teams:user.teams,
        created: false
    }
});

module.exports={
    infoCleaner
        
}