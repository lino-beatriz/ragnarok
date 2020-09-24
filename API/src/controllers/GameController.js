const Game = require('../models/Game.js');

module.exports = {
    async listAll(req, res) {
        const games = await Game.findAll();

        return res.json(games);
    },

    async details(req, res) {
        const game = await Game.findByPk(req.params.id);

        return res.json(game);
    }
};