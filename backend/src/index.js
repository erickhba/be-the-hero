const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
GET - Buscar uma informação no backend
POST - Criar uma informação no backend
PUT - Alterar uma informação
DELETE- Deletar um informação 
*/

/*

Tipos de parametros:

Query: parâmetros nomeados enviados na rota após o símoblo de ? (filtros, paginação)

Route params: Parâmetros utilizados para identificar recursos

Reaquest body: 


*/
