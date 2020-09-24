const express = require('express');
const GameController = require('./controllers/GameController.js');

const routes = express.Router();

// Rota para listar todos os jogos
routes.get('/games', GameController.listAll);

// Rota para mostrar detalhes de um jogo specifico, atraves do ID
routes.get('/games/:id', GameController.details);

module.exports = routes;