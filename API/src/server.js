const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');

require('./database/index.js');

const app = express();

// Para saber lidar com requisições que vem no formato json
app.use(express.json());

// Permitindo acesso externo
app.use(cors());

app.use(routes);

// Definido a porta onde a API irá rodar
app.listen(3333);