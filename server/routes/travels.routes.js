const { showTravels, addTravel } = require("../controllers/travels.controllers")


module.exports = (app) => {
  app.get("/api/travels", showTravels);
  app.post("/api/travels/new", addTravel)
}