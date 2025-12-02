const Aluno = require("../models/Aluno");
class AlunoController{
    static async relatorio(req, res){
        const status = req.query.s;
        const alunos = await Aluno.find();
        res.render("aluno/relatorio", {alunos, status});
    }
    static async cadastrarPost(req, res){
        const aluno = req.body;
        const novoAluno = new Aluno ({
            matricula: aluno.mat,
            nome: aluno.nome,
            curso: aluno.curso,
            periodo: aluno.periodo
        });
        await novoAluno.save();
        res.redirect("/alunos?s=1");
    }
    static cadastrarGet(req, res){
        const aluno = {};
        res.render("aluno/cadastrar", {aluno});
    }
    static async detalhar(req, res){
        const aluno = await Aluno.findOne({_id: req.params.id});
        res.render("aluno/detalhar", {aluno});
    }
    static async remover(req, res){
        await Aluno.deleteOne({_id: req.params.id});
        res.redirect("/alunos?s=2");
    }
    static async atualizarGet(req, res){
        const aluno = await Aluno.findOne({_id: req.params.id});
        res.render("aluno/cadastrar", {aluno});
    }
    static async atualizarPost(req, res){
        const aluno = req.body;
        await Aluno.updateOne({_id: aluno.id}, {
            matricula: aluno.mat,
            nome: aluno.nome,
            curso: aluno.curso,
            periodo: aluno.periodo
        });
        res.redirect("/alunos?s=3");
    }
}

module.exports = AlunoController;