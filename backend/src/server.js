const express = require('express'); //chamando a biblioteca do express
const routes = require("./routes");
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://program:program@cluster0.gnhoq.mongodb.net/Omnistack8?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true});
// ocorrer erro no banco de dados, voltar myFirstDatabase

server.use(cors());
server.use(express.json()); //Recebe os dados do insomnia
server.use(routes);

server.listen(3333); //adicionando a rota localhost http://localhost:3333




