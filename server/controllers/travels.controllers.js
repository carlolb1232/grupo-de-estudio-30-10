const Travel = require('../models/travels.models');

module.exports.addTravel = (req, res) => {
  Travel.create(req.body)
    .then((newTravel)=>res.json({Travel:newTravel}))
    .catch((err)=> res.json({message:"Ohhh nooo, ha ocurrido un error", error:err}))
}

module.exports.showTravels = (req, res)=>{
  Travel.find()
    .then((allTravels)=>res.json({Travels:allTravels}))
    .catch((err)=> res.json({message:"Ohhh nooo, ha ocurrido un error", error:err}))
}