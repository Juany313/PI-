const {Router} = require("express");
const {createTeamHandler} = require("../handlers/teamsHandlers")

const teamsRouter = Router();

teamsRouter.post("/", createTeamHandler)



module.exports = teamsRouter;