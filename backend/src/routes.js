const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index); //buscar devs
routes.post('/devs', DevController.store); //cadastrar devs
routes.post('/devs/:devId/likes', LikeController.store); //devs dar like
routes.post('/devs/:devId/dislikes', DislikeController.store); //devs dar dislike

module.exports = routes; 