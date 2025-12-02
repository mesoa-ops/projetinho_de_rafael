const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
class UsuarioController{
    static async relatorio(req, res){
        const status = req.query.s;
        const usuarios = await Usuario.find();
        res.render("usuario/relatorio", {usuarios, status});
    }

    static async cadastrarPost(req, res){
        const usuario = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
        const novoUsuario = new Usuario ({
            nome: usuario.nome,
            email: usuario.email,
            senha: hash    
        });
        await novoUsuario.save();
        res.redirect("/usuarios?s=1");
    }

    static cadastrarGet(req, res){
        const usuario = {};
        res.render("usuario/cadastrar", {usuario});
    }

    static async detalhar(req, res){
        const usuario = await Usuario.findOne({_id: req.params.id});
        res.render("usuario/detalhar", {usuario});
    }

    static async remover(req, res){
        await Usuario.deleteOne({_id: req.params.id});
        res.redirect("/usuarios?s=2");
    }

    static async atualizarGet(req, res){
        const usuario = await Usuario.findOne({_id: req.params.id});
        res.render("usuario/cadastrar", {usuario});
    }

    static async atualizarPost(req, res){
        const usuario = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
        await Usuario.updateOne({_id: usuario.id}, {
            nome: usuario.nome,
            email: usuario.email,
            senha: hash  
        });
        res.redirect("/usuarios?s=3");
    }
    
    static logarGet(req, res){
        const status = req.query.s;
        res.render("usuario/login", {status});
    }

    static async logarPost(req, res){
        const login = req.body;
        const conta = await Usuario.findOne({email: login.email});
        if(conta != null){
            if(bcryptjs.compareSync(login.senha, conta.senha)){
                req.session.usuario = conta._id;
                res.redirect("/");
            }else{
                res.redirect("/usuarios/login?s=1");
            }
        }else{
            res.redirect("/usuarios/login?s=1");
        }
    }
    
    static deslogar(req, res){
        req.session.usuario = null;
        res.redirect("/usuarios/login?s=2");
    }
}

module.exports = UsuarioController;