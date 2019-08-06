const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const temaSchema = new Schema({
    nombre: String,

});

var Tema = mongoose.model("tema", temaSchema);
module.exports = Tema;
