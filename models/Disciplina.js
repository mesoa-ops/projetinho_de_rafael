const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const disciplinaSchema = Schema({
    nome: String,
    cargaHoraria: Number,
    professor: String
});
module.exports = mongoose.model("Disciplina", disciplinaSchema);