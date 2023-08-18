const sequelize = require('../database');
const defineGame = require('../models/game');
const Game = defineGame(sequelize, sequelize.Sequelize.DataTypes);

module.exports = {
    async create(req, res) {
        try {
            const game = await Game.create(req.body);
            return res.status(201).json(game);
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: 'Falha ao criar o jogo', details: error.message });
          }
          
    },
    async listAll(req, res) {
        try {
            const games = await Game.findAll();
            res.status(200).json(games);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao recuperar jogos', error });
        }
    },
    async findById(req, res) {
        try {
            const game = await Game.findByPk(req.params.id);
            if (game) {
                res.status(200).json(game);
            } else {
                res.status(404).json({ message: 'Jogo não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao recuperar o jogo', error });
        }
    },
    async update(req, res) {
        try {
            const updatedGame = await Game.update(req.body, {
                where: { id: req.params.id },
            });
            if (updatedGame[0]) {
                res.status(200).json({ message: 'Jogo atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'Jogo não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar o jogo', error });
        }
    },
    async delete(req, res) {
        try {
            const deletedGame = await Game.destroy({ where: { id: req.params.id } });
            if (deletedGame) {
                res.status(200).json({ message: 'Jogo excluído com sucesso' });
            } else {
                res.status(404).json({ message: 'Jogo não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao excluir o jogo', error });
        }
    }
};
