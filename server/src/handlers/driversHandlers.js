const {createDriverDB, getAllDrivers, getDriverById, getDriverByName} = require("../controllers/driversControllers")

const getDriverHandler = async (req, res)=>{
    const {name} = req.query;

    try {
        
        if(name){
            const userByName = await getDriverByName(name);
            res.status(200).json(userByName);
        } else {
            const response = await getAllDrivers();
            res.status(200).json(response);
        }

    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
};

const getDetailHandler = async (req, res)=>{
    const{id} = req.params;
    const source = isNaN(id)? "bbd" : "api";
    // hhjl4k5-45kj-45kkk ---> NaN ---> source="bbd"
    // 4 ---> source="api"
    console.log("····##### id:",id);
    console.log(source);

    
    try {
        const response = await getDriverById(id,source)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
   
};

const createDriverHandler = async (req,res)=> {
    const {name, teams,description,image,nationality,dob} = req.body;

    try {
        const response = await createDriverDB(name,teams,description,image,nationality,dob)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


/* 
    /:id   ---> req.params  ---> es una ruta diferente      ---> al agregar algo modifica la ruta
    query  ---> req.query  ---> ?name=Juany&sexo=masculino  ---> no modifica la ruta
    body   ---> req.body  ---> info
*/

module.exports= {
    getDetailHandler,
    getDriverHandler,
    createDriverHandler
}