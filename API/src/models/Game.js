const { Model, DataTypes } = require('sequelize');

class Game extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            image: DataTypes.STRING,
            price: DataTypes.DECIMAL(5,2),
            platform: DataTypes.STRING,
            stores: DataTypes.STRING
        }, {
            sequelize
        });
    }
}

module.exports = Game;