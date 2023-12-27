const {createDriverDB, getAllDrivers, getDriverById, getDriverByName,getDriverByTeam} = require("../controllers/driversControllers")
const {getAllTeams} = require("../controllers/teamsControllers")

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
    //const source = isNaN(id)? "bbd" : "api";
    // hhjl4k5-45kj-45kkk ---> NaN ---> source="bbd"
    // 4 ---> source="api"
  
    try {
        const response = await getDriverById(id)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
   
};

const createDriverHandler = async (req,res)=> {
    const {name,lastName, teams,description,image,nationality,dob} = req.body;


    try {
        //*Si la bdd esta vacia llamo a  getAllTeams dentro de una constante y con await.
        const driversDb = await getAllTeams();

        const response = await createDriverDB(name,lastName,teams,description,image,nationality,dob)
        
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