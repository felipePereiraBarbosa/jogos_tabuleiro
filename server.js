const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database'); // Importando o objeto sequelize do arquivo database.js
const routes = require('./routes'); // Importando as rotas

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app); // Aplicando as rotas

sequelize.sync().then(() => { // Chamando o método sync no objeto sequelize
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao inicializar o banco de dados:', error);
});
