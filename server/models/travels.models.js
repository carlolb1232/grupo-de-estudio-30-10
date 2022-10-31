const mongoose = require("mongoose");

const TravelSchema = new mongoose.Schema(
  {
    packageName: {
      type:String,
      require: [
        true, "Debe ingresar el nombre del paquete"
      ],
      minlength:[
        3, "El nombre del paquete debe tener 3 caracteres como mínimo"
      ],
      maxlength:[
        20, "El nombre del paquete es muy largo "
      ]
    },
    destination: {
      type: String,
      require: [
        true, "Debe ingresar el nombre del destiono"
      ],
      minlength:[
        3, "El nombre del destino debe tener 3 caracteres como mínimo"
      ],
      maxlength:[
        20, "El nombre del destino es muy largo"
      ]
    },
    origin:{
      type: String,
      require: [
        true, "Debe ingresar el nombre del origen"
      ],
      minlength:[
        3, "El nombre del origen debe tener 3 caracteres como mínimo"
      ],
      maxlength:[
        20, "El nombre del origen es muy largo"
      ]
    },
    price: {
      type: Number,
      require: [
        true, "Debe ingresar un precio"
      ],
      min:[
        1, "El precio debe ser al menos 1"
      ]
    },
    arrive_date:{
      type: Date,
      require: [
        true, "Los paquetes deben tener fecha de llegada"
      ]
    }
  }, { timestamps: true });

  const Travel = mongoose.model('Travel', TravelSchema);

  module.exports = Travel;