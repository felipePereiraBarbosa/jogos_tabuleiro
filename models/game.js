const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const defineGame = (sequelize, DataTypes) => {
  return sequelize.define('Game', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numberOfPlayers: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ageRange: {
        type: DataTypes.STRING,
        allowNull: true
    }
  });
};

module.exports = defineGame;
