const {Router} = require("express");
const router_perfil = Router();

//crud de cria pras parada gppd
router_perfil.get("/perfil/id", (req, res)=>{
    const {id} = req.params;
    res.send('getando o Perfil da conta ${id}');
});

router_perfil.post("/perfil/id", (req, res) =>{
    const {id} = req.params;
    res.send("post perfil");
});

router_perfil.put("/perfil/id", (req, res) =>{
    const {id} = req.params;
    res.send("put perfil");
});

router_perfil.delete("/perfil/id", (req, res) =>{
    const {id} = req.params;
    res.send("delete");
});

module.exports = router_perfil;