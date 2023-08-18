const Sequelize = require('sequelize');

const sequelize = new Sequelize('BoardGames', 'sa', 'YourStrong!Passw0rd', {
  host: '192.168.3.9',
  port: 1433,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false
    }
  }
});

module.exports = sequelize; 

