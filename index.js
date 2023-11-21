const express = require('express');
require("dotenv").config();
const connectToDatabase = require('./src/database/database');
const cors = require('cors');

const usuario = require('./src/router/usuario.router');//arquivo de rota usuario
const authService = require("./src/service/auth.service");
const auth = require("./src/router/auth.router"); //arquivo de rota de auth
const produto = require("./src/router/produto.router");
const categoria = require ("./src/router/categoria.router");
const sabores = require ("./src/router/sabores.router");
const carrinho = require ("./src/router/carrinho.router");
const pedido = require ("./src/router/pedido.router");
//const docs = require ("./src/router/docs.router");

// Conectar ao banco de dados
connectToDatabase();

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/usuario', usuario);
app.use("/auth", auth);
app.use("/produto", produto);
app.use("/categoria", categoria);
app.use("/sabores", sabores);
app.use("/carrinho", carrinho);
app.use("/pedido", pedido);
//app.use("/docs", docs);


// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem vindo ao nosso marketPlace');
});

app.post("/login", async (req, res) => {
    try{
      const { email, senha } = req.body;
      const user = await authService.loginService(email);

      if(!user){
        return res.status(400).send({ message: "Usuario não encontrado, tente novamente"});
      }
      if(senha != user.senha){
        return res.status(400).send({ message: "Senha invalida"});
      }
      res.send(user); 
      }catch(err){
        console.log(`erro: ${err}`);
      }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});