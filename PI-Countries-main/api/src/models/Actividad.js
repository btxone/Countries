const {DataTypes} = require('sequelize');

module.exports = (sequalize) => {
    sequalize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('summer', 'winter', 'fall', 'spring'),
            
        },
    });
}
