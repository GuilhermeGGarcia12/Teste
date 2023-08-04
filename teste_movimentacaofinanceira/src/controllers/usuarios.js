const Express = require("express");
const router = Express.Router();
const connection = require("../models/index");

const {Usuarios} = require("../models");

router.get("/usuarios",async(req,res)=>{
    const user = await Usuarios.findAll({})
    res.send(user)
});
router.post("/usuarios",async(req,res)=>{
    try {
        await Usuarios.create({
            nome: "Guilherme"
        })        
        res.send("Usuario Cadastrado")
    }catch(error){
        res.send("Erro ao cadastrar o usuário")
    }
});
module.exports=router