const { DataTypes } = require('sequelize');
const db = require('../configuraciones/db');

const Empleado = db.define(
    
    'empleado',

    {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },                                  //Este modelo fue creado porque los usuarioas lo solicitan
       
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: true,    
    },
        },

    {

        tableName: 'empleados',
        timestamps: false, 
    }
);
module.exports = Empleado;