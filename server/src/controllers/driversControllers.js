const {Driver,Team} = require("../db");
const {infoCleaner} = require("../utils/index");

const axios = require("axios");


const createDriverDB = async (name,lastName, teams, description, image, nationality, dob) => {

//! mirar en orm II 43 min 

    
        // Crear el conductor en la base de datos
        const newDriver = await Driver.create({ name,lastName, description, image, nationality, dob });

        newDriver.addTeams(teams);
        return newDriver;
};

  

const getAllDrivers = async () => {

    const driversDB = await Driver.findAll({
        include: {
            model: Team,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }
    });

    const driversDBTeamsEnArray = driversDB.map((driver) => ({
        ...driver.toJSON(),
        Teams: driver.Teams.map((team) => team.name.trim()), // Extraigo solo los nombres y elimino espacios adicionales
      }));



    const infoApi = (await axios.get(`http://localhost:5000/drivers`)).data;
    const driversApi = infoCleaner(infoApi);

    const driversApiWithTeamsArray = driversApi.map(({ teams, ...rest }) => ({
        ...rest,
        Teams: teams ? teams.split(",").map((team) => team.trim()) : [],
        lastName: rest.name.surname,
        name: rest.name.forename
      }));
      
      

    const allDrivers = [...driversDBTeamsEnArray, ...driversApiWithTeamsArray];


    return allDrivers;
}

const getDriverById = async (id) => {
    let drivers = await getAllDrivers();
    
    const driver = drivers.find(drive => drive.id.toString() === id);

    return driver; 
};


const getDriverByName = async (name) => {
    let drivers = await getAllDrivers();

    const nameLower = name.toLowerCase();

    let coincidencias = drivers.filter(driver => {
        return driver.name.toLowerCase() === nameLower;
    });

    if (coincidencias.length === 0) {
        return "No existen Drivers con ese nombre";
    }

    const primeros15Drivers = coincidencias.slice(0, 15);

    return primeros15Drivers;
};





module.exports = {
    createDriverDB,
    getAllDrivers,
    getDriverById,
    getDriverByName
}





