const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alunoSchema = Schema({
    matricula: Number,
    nome: String,
    curso: String,
    periodo: Number
});
module.exports = mongoose.model("Aluno", alunoSchema);