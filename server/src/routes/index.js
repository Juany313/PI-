const { Router } = require("express");
const driversRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouter");

const router = Router();

router.use("/teams", teamsRouter);
router.use("/drivers", driversRouter);

module.exports = router;


