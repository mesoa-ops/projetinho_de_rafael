const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
require("dotenv/config");
const session = require("express-session");
app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
}));
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const alunoRoutes = require("./routes/alunoRoutes");
const disciplinaRoutes = require("./routes/disciplinaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(alunoRoutes);
app.use(disciplinaRoutes);
app.use(usuarioRoutes);

app.get("/", function(req, res){
    if(req.session.usuario){
        res.render("index");
    }else{
        res.redirect("/usuarios/login");
    }
});





app.use(function(req, res){
    res.status(404).render("404");
});

app.listen(process.env.PORT, function(){
    console.log("Rodando");
});