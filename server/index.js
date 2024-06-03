const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const router_login = require("./rotas/login");

// middlewares
app.use(express.json());
app.use(cors());

// importando e usando as rotas
app.use("/login", router_login);

/*app.get('/', (req, res) => {

    res.send('funcionando');
});
*/

app.listen(port, (error) => {
    if (error) {
        console.log("Erro ao iniciar o servidor");
        return;
    }

    console.log("Servidor online na porta", port);
});
