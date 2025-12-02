const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const disciplinaController = require("../controllers/disciplinaController");

routes.get("/disciplinas", auth, disciplinaController.relatorio);
routes.get("/disciplinas/cadastrar", auth, disciplinaController.cadastrarGet);
routes.get("/disciplinas/remover/:id", auth, disciplinaController.remover);
routes.get("/disciplinas/atualizar/:id", auth, disciplinaController.atualizarGet);
routes.get("/disciplinas/:id", auth, disciplinaController.detalhar);

routes.post("/disciplinas", auth, disciplinaController.cadastrarPost);
routes.post("/disciplinas/atualizar", auth, disciplinaController.atualizarPost);


module.exports = routes;