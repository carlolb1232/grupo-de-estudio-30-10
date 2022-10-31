const Travel = require('../models/travels.models');

module.exports.addTravel = (req, res) => {
  Travel.create(req.body)
    .then((newTravel)=>res.json({Travel:newTravel}))
    .catch((err)=> res.json({message:"Ohhh nooo, ha ocurrido un error", error:err}))
}

module.exports.showTravels = (req, res)=>{
  Travel.find()
    .then((allTravels)=>res.json({Travels:allTravels}))
    .catch((err)=> res.json({message:"Ohhh nooo, ha ocurrido un error", error:err}));
}

module.exports.findTravel = (req, res)=>{
  Travel.findOne({_id:req.params.id})
    .then((travel)=>res.json({Travel:travel}))
    .catch((err)=> res.json({message:"Ohhh nooo, ha ocurrido un error", error:err}));
}

module.exports.updateTravel = (req, res) => {
  Travel.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators:true, new:true})
    .then((updatedTravel)=>res.json({Travel:updatedTravel}))
    .catch((err)=> res.json({message:"Ohhh nooo, ha ocurrido un error", error:err}));
}

module.exports.deleteTravel = (req, res)=>{
  Travel.findByIdAndDelete({_id:req.params.id})
    .then((deleteResponse)=>res.json({Travel:deleteResponse}))
    .catch((err)=> res.json({message:"Ohhh nooo, ha ocurrido un error", error:err}));
}