const Express = require("express");
const App = new Express();
const Usuarios = require("./controllers/usuarios.js");
const Transacoes = require("./controllers/transacoes.js")

App.use(Express.json());
App.use(Usuarios)
App.use(Transacoes)
App.listen(3000, ()=>{console.log("Meu server está rodando na porta 3000")})