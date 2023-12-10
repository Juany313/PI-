const {createDriverDB, getAllDrivers} = require("../controllers/driversControllers")

const getDriverHandler = async (req, res)=>{
    const {name} = req.query;

    
    const response = await getAllDrivers();
    res.status(200).json(response);
    
   
};

const getDetailHandler = (req, res)=>{
    const{id} = req.params;
    const source = isNaN(id)? "bbd" : "api";
    // hhjl4k5-45kj-45kkk ---> NaN ---> source="bbd"
    // 4 ---> source="api"
    console.log("····##### id:",id);
    console.log(source);

    
        res.status(200).send("Detalle de driver")
    
   
};

const createDriverHandler = async (req,res)=> {
    const {name, teams} = req.body;

    try {
        const response = await createDriverDB(name,teams)
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