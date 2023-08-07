const Express = require("express");
const router = Express.Router();
const connection = require("../models/index");
const {addValor} = require("../services/usuarios")

const {Usuarios,Transacoes} = require("../models");

router.get("/transacao/:idusuario",async(req,res)=>{
    const user = await Transacoes.findAll({})
    res.send(user)
});
router.post("/transacao/add/:idusuario",async(req,res)=>{
   addValor()
   if(req.params.idusuario){
    
   }
   res.send("Valor Adicionado")
});

router.post("/transacao/subtrai/:idusuario",async(req,res)=>{
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