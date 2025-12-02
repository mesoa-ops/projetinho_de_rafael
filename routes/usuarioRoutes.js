const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const usuarioController = require("../controllers/usuarioController");

routes.get("/usuarios", auth, usuarioController.relatorio);
routes.get("/usuarios/cadastrar", usuarioController.cadastrarGet);
routes.get("/usuarios/login", usuarioController.logarGet);
routes.get("/usuarios/deslogar", auth, usuarioController.deslogar);
routes.get("/usuarios/remover/:id", auth, usuarioController.remover);
routes.get("/usuarios/atualizar/:id", auth, usuarioController.atualizarGet);
routes.get("/usuarios/:id", auth, usuarioController.detalhar);

routes.post("/usuarios", usuarioController.cadastrarPost);
routes.post("/usuarios/atualizar", auth, usuarioController.atualizarPost);
routes.post("/usuarios/login", usuarioController.logarPost);


module.exports = routes;