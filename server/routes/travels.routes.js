const { showTravels, addTravel, findTravel, updateTravel, deleteTravel } = require("../controllers/travels.controllers")


module.exports = (app) => {
  app.get("/api/travels", showTravels);
  app.post("/api/travels/new", addTravel);
  app.get("/api/travels/:id", findTravel);
  app.put("/api/travels/update/:id", updateTravel);
  app.delete("/api/travels/:id", deleteTravel)
}