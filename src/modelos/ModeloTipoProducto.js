const { DataTypes } = require('sequelize'); 
const db = require('../configuraciones/db');
const Tipoproducto = db.define(
    'tipoproducto', 
    { 
        codigo_Tipo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        Nombre_Tipo: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }, 
    },                                      // Modelo adaptado ya que productos la solicita                                             

    {
        tableName: 'tipoproducto', 
        timestamps: false,
    }
);

module.exports = Tipoproducto;