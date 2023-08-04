const Express = require("express");
const App = new Express();
App.use(Express.json());
App.get("/",(req,res)=>{
    res.send("top")
});
App.listen(3000, ()=>{console.log("Meu server está rodando na porta 3000")})