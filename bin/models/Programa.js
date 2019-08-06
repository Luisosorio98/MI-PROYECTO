const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programaSchema = new Schema({
    nombre: String,
    semestre_cursado: String,
});

var Programa = mongoose.model("programa", programaSchema);
module.exports = Programa;
