const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evaluacionSchema = new Schema({
    tipo: String,
    duracion: String,

});

var Evaluacion = mongoose.model("evaluacion", evaluacionSchema);
module.exports = Evaluacion;
