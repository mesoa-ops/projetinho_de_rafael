const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const alunoController = require("../controllers/alunoController");

routes.get("/alunos", auth, alunoController.relatorio);
routes.get("/alunos/cadastrar", auth, alunoController.cadastrarGet);
routes.get("/alunos/remover/:id", auth, alunoController.remover);
routes.get("/alunos/atualizar/:id", auth, alunoController.atualizarGet);
routes.get("/alunos/:id", auth, alunoController.detalhar);

routes.post("/alunos", auth, alunoController.cadastrarPost);
routes.post("/alunos/atualizar", auth, alunoController.atualizarPost);


module.exports = routes;