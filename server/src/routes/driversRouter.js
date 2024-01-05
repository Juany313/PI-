const {Router} = require("express");
const {getDriverHandler,getDetailHandler,createDriverHandler} = require("../handlers/driversHandlers");

const driversRouter = Router();


driversRouter.get("/", getDriverHandler)
driversRouter.get("/:id", getDetailHandler)
driversRouter.post("/", createDriverHandler)


module.exports = driversRouter;


