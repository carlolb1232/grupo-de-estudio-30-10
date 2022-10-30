const { showTravels, addTravel, findTravel } = require("../controllers/travels.controllers")


module.exports = (app) => {
  app.get("/api/travels", showTravels);
  app.post("/api/travels/new", addTravel);
  app.get("/api/travels/:id", findTravel);
}