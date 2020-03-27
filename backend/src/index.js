const express = require('express');
const cors = require('cors');
const routes =require('./routes');



const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*

Rota / Recurso

Métodos HTTP:

GET: buscar uam informações
POST: criar uma informação 
PUT: alterar uma informação 
DELETE: deletetar uma informação

Tipos de Parâmetros

Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: corpo da requisição, utilizado para criar ou alterar recurso

*/

