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
    let nombreEnMinusculas = name.toLowerCase();

    // Cambiar la primera letra a mayúscula
    let nombreConPrimeraLetraMayuscula = nombreEnMinusculas.charAt(0).toUpperCase() + nombreEnMinusculas.slice(1);
    //console.log("ACA NAMEEEE", nombreConPrimeraLetraMayuscula);
    

    const infoApi = (await axios.get(`http://localhost:5000/drivers?name.forename=${nombreConPrimeraLetraMayuscula}`)).data;
    const driversApi = infoCleaner(infoApi);
    //console.log("ACAINFO API", driversApi);
    
    
    const driverDB = await Driver.findAll({where: {name:nombreConPrimeraLetraMayuscula}});
    
    //console.log("ACAINFO DB", driverDB);

    let suma = [...driverDB, ...driversApi]

    if(suma.length === 0){
        return "No existen Drivers con ese nombre";
    }

    const primeros15Drivers = suma.slice(0, 15);

    return primeros15Drivers;

}


module.exports = {
    getDriversDb,
    createDriverDB,
    getAllDrivers,
    getDriverById,
    getDriverByName
}





