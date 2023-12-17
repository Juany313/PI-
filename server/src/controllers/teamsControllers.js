const {Team} = require("../db");
const axios = require("axios");


const getAllTeams = async () => {

    const teamsDB = await Team.findAll();
   


    const teams = [];
    
    const infoApi = (await axios.get(`http://localhost:5000/drivers`)).data;

            infoApi.forEach(element => {
                teams.push(element.teams);
            });

    // Combina todas las palabras en un solo string y divide por comas
    let todasLasPalabras = teams.join(',').split(',');

    // Utiliza un Set para eliminar duplicados y luego convierte de nuevo a un arreglo
    let teamsSinRepetir = [...new Set(todasLasPalabras)];
        

        if (teamsDB.length !== 0) {
            return teamsSinRepetir;
        };

        

        async function agregarEquiposEnBaseDeDatos() {
            teamsSinRepetir.forEach(async (element) => {
                let name = element;
                try {
                    await Team.create({ name });
                    console.log(`Equipo ${name} agregado a la base de datos.`);
                } catch (error) {
                    console.error(`Error al agregar el equipo ${name}: ${error.message}`);
                }
            });
        }
        
        // Llama a la función para comenzar el proceso
        agregarEquiposEnBaseDeDatos();
        

    return teamsSinRepetir;
};

module.exports={
    getAllTeams
}

/* 
let palabras = [
  'McLaren, Mercedes',
  'Prost, Sauber, Jordan,Williams,BMW Sauber,Renault',
  'Williams, Mercedes',
  'Minardi, Renault, McLaren, Ferrari, Alpine',
  'Renault, McLaren, Lotus, Caterham, Lotus',
  'Williams',
];

// Combina todas las palabras en un solo string y divide por comas
let todasLasPalabras = palabras.join(',').split(',');

// Utiliza un Set para eliminar duplicados y luego convierte de nuevo a un arreglo
let palabrasSinRepetir = [...new Set(todasLasPalabras)];

console.log(palabrasSinRepetir);

*/