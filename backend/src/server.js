const express = require('express'); //chamando a biblioteca do express
const routes = require("./routes");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const coneectedUsers = {};
io.on('connection', socket =>{
  const { user } = socket.handshake.query; 
  
  console.log(user, socket.id);
  
  connectedUsers[user] = socket.id;

});

mongoose.connect('mongodb+srv://program:program@cluster0.gnhoq.mongodb.net/Omnistack8?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true});
// ocorrer erro no banco de dados, voltar myFirstDatabase

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = coneectedUsers;

  return next();
});

app.use(cors());
app.use(express.json()); //Recebe os dados do insomnia
app.use(routes);

server.listen(3333); //adicionando a rota localhost http://localhost:3333