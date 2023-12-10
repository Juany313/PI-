const {Driver,Team} = require("../db");
const {infoCleaner} = require("../utils/index");

const axios = require("axios");



const createDriverDB = async (name,teams) =>{
    const newDriver = await Driver.create({name,teams})

    return newDriver;
};

const getAllDrivers = async () => {
    const driversDB = await Driver.findAll();

    const infoApi = (await axios.get(`http://localhost:5000/drivers`)).data;
    const driversApi = infoCleaner(infoApi);

    return [...driversDB, ...driversApi];
}


module.exports = {
    createDriverDB,
    getAllDrivers
}