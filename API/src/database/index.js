const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const Game = require('../models/Game.js');

// Criando a conexão com o banco de dados passando os dados de configuração
const connection = new Sequelize(dbConfig);

// Preparando o model para ser utilizado
Game.init(connection);

module.exports = connection;