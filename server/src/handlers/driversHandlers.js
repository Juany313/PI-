const {createDriverDB, getAllDrivers, getDriverById, getDriverByName,getDriverByTeam} = require("../controllers/driversControllers")
const {getAllTeams,getAllTeamsInfo} = require("../controllers/teamsControllers")

const getDriverHandler = async (req, res)=>{
    const {name, team} = req.query;

    try {
        
        if(name){
            const driverByName = await getDriverByName(name);
            res.status(200).json(driverByName);
        } else if(team) {
            const driverByTeam = await getDriverByTeam(team);
            //console.log("acaaa#########driverByTeam",driverByTeam);
            res.status(200).json(driverByTeam);
        } else {
            const response = await getAllDrivers();
            const responseRecorte = response   //.slice(0, 10);
            res.status(200).json(responseRecorte);
        }

    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
};

const getDetailHandler = async (req, res)=>{
    const{id} = req.params;
  
    try {
        const response = await getDriverById(id)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
   
};

const createDriverHandler = async (req,res)=> {
    const {name,lastName, teams,description,image,nationality,dob} = req.body;


//console.log("###############teams", teams);
try {
    //*Si la bdd esta vacia llamo a  getAllTeams dentro de una constante y con await.
    const driversTeams = await getAllTeams();
    console.log("###############driversTeams", driversTeams);
        

        if (!teams || !Array.isArray(teams)) {
            return res.status(400).json({ error: "La propiedad 'teams' debe ser un array definido." });
        }

        const driversTeamsInfo = await getAllTeamsInfo();
        
        let teamsId = [];

        for (const team of teams) {
            // Verifica que el equipo no sea nulo o indefinido antes de usar trim()
            if (team && typeof team === 'string') {
               
      
                const teamInfo = driversTeamsInfo.find(driverTeam => driverTeam.name.toLowerCase() === team.toLowerCase());
      
                if (teamInfo) {
                    teamsId.push(teamInfo.id);
                } else {
                    console.log(`El equipo '${team}' no está presente en driverTeams.`);
                }
            }
        }
        const response = await createDriverDB(name,lastName,teamsId,description,image,nationality,dob)
        
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports= {
    getDetailHandler,
    getDriverHandler,
    createDriverHandler
}