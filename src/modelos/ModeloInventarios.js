const { DataTypes } = require('sequelize'); 
const db = require('../configuraciones/db');
const Inventario = db.define(
    'inventario', 
    { 
        id_inventario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    },
                                        //Esta fue creada por que el modelo de movimiento productos la necesita
    {
        tableName: 'inventarios', 
        timestamps: false,
    }
); 


module.exports = Inventario;