const { Router } = require("express");
const router_login = Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");


//conectando com o banco de dados do mito
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "tcgeu_db"
});

router_login.get("/login", (req, res)=>{
    const email = req.body.email;
    const senha = req.body.senha;

    db.query("SELECT * FROM usuarios WHERE email =?", [email], 
        (err, result) => {
            if(err){
                res.send(err);
            }
            if(result.length > 0){
                bcrypt.compare(senha, result[0].senha, (erro, result) =>{
                    if(result){
                    res.send({msg: "Login realizado com sucesso!"});
                    } else{
                        res.send({msg: "A senha está incorreta!"});
                    }
                })       
            } else{
                res.send({msg: "Email não encontrado, registre-se!"});
            }
        });
});

module.exports = router_login;