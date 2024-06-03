const { Router } = require("express");
const router_castro = Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//conectando com o banco de dados do mito
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "tcgeu_db"
});

//registro e login de usuarios no servidor do monstro

router_cadstro.get("/cadastro", (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    db.query("SELECT * FROM usuarios WHERE email =?", [email],
        (err, result) => {
            if(err){
                    res.send(err);
                }
           if(result.length == 0){
            bcrypt.hash(senha, saltRounds, (erro, hash) =>{
                db.query("INSERT INTO usuarios (email, senha) VALUES (?, ?)", [email, hash],
                (err, response) => {
                    if(err){
                        res.send(err);
                    }
                    res.send({msg: "Cadastro realizado com sucesso"});
                });
            })
           }else{
            res.send({msg: "Email já cadastrado!"})
           }
        });
});



module.exports = router_castro;