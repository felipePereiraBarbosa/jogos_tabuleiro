const GamerController = require('./controllers/GamerController');

module.exports = (app) => {
  app.post('/games', GamerController.create);
  app.get('/games', GamerController.listAll);
  app.get('/games/:id', GamerController.findById);
  app.put('/games/:id', GamerController.update);
  app.delete('/games/:id', GamerController.delete);

  app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor!');
  });
};
