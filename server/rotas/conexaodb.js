const mysql= require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    port:3006,
    user: "root",
    password: "1234",
    database: "tcgeu_db"
});

module.exports = conexao;