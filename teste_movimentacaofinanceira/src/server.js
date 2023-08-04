const Express = require("express");
const App = new Express();
const Usuarios = require("./controllers/usuarios.js");

App.use(Express.json());
App.use(Usuarios)
App.listen(3000, ()=>{console.log("Meu server está rodando na porta 3000")})