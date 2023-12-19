const {Driver,Team} = require("../db");
const {infoCleaner} = require("../utils/index");

const axios = require("axios");


const getDriversDb = async () => {

    const driversDB = await Driver.findAll();

    

    return [...driversDB];
}
const createDriverDB = async (name,teams,description,image,nationality,dob) =>{
    const newDriver = await Driver.create({name,teams,description,image,nationality,dob})
   
    return newDriver;
};

const getAllDrivers = async () => {

    const driversDB = await Driver.findAll();

    const infoApi = (await axios.get(`http://localhost:5000/drivers`)).data;
    const driversApi = infoCleaner(infoApi);

    const allDrivers = [...driversDB, ...driversApi];

    const arrayRecortado = allDrivers.slice(0, 7);

    return arrayRecortado;
}

const getDriverById = async (id,source) =>{
    let driver;
     if(source==="api"){
         infoDriver = [(await axios.get(`http://localhost:5000/drivers/${id}`)).data];
         driver = infoCleaner(infoDriver);
         //console.log("····##### respuestaaaaa", infoDriver);
     } else {
         driver = (await Driver.findByPk(id/* , {
             include: {
                 model: Post,
                 attributes: ["title", "body"]
             }
         } */));
        
     }


     return driver;
};

const getDriverByName = async (name) => {

    console.log("ACA NAMEEEE", name);
     const infoApi = (await axios.get(`http://localhost:5000/drivers?name.forename=${name}`)).data;
    const driversApi = infoCleaner(infoApi);
console.log("ACAINFO API", driversApi);

//!falta ver como traer los de la api y como hacer para tener a todos juntos
/*
    const driverFiltered = driversApi.filter(driver=> driver.name===name)
    console.log("ACA DRIVER FILTEREDDDDD", driverFiltered);
    const driverDB = await Driver.findAll({where: {name:name}});

    let suma = [...driverFiltered, ...driverDB]

    return suma; */
    return driversApi;

}


module.exports = {
    getDriversDb,
    createDriverDB,
    getAllDrivers,
    getDriverById,
    getDriverByName
}





