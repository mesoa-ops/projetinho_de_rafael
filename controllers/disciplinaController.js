const Disciplina = require("../models/Disciplina");
class DisciplinaController{
    static async relatorio(req, res){
        const status = req.query.s;
        const disciplinas = await Disciplina.find();
        res.render("disciplina/relatorio", {disciplinas, status});
    }
    static async cadastrarPost(req, res){
        const disciplina = req.body;
        const novaDisciplina = new Disciplina ({
            nome: disciplina.nome,
            cargaHoraria: disciplina.cargaHoraria,
            professor: disciplina.professor
        });
        await novaDisciplina.save();
        res.redirect("/disciplinas?s=1");
    }
    static cadastrarGet(req, res){
        const disciplina = {};
        res.render("disciplina/cadastrar", {disciplina});
    }
    static async detalhar(req, res){
        const disciplina = await Disciplina.findOne({_id: req.params.id});
        res.render("disciplina/detalhar", {disciplina});
    }
    static async remover(req, res){
        await Disciplina.deleteOne({_id: req.params.id});
        res.redirect("/disciplinas?s=2");
    }
    static async atualizarGet(req, res){
        const disciplina = await Disciplina.findOne({_id: req.params.id});
        res.render("disciplina/cadastrar", {disciplina});
    }
    static async atualizarPost(req, res){
        const disciplina = req.body;
        await Disciplina.updateOne({_id: disciplina.id}, {
            nome: disciplina.nome,
            cargaHoraria: disciplina.cargaHoraria,
            professor: disciplina.professor
        });
        res.redirect("/disciplinas?s=3");
    }
}

module.exports = DisciplinaController;