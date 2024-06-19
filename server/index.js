const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const port = process.env.PORT;
const {getTeamsHandler} = require("./src/handlers/teamsHandlers.js")

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${port}`);
  
})
}).catch(error => console.error(error));

