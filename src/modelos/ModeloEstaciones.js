const { DataTypes } = require('sequelize');
const db = require('../configuraciones/db');

const Estaciones = db.define(
    
    'estaciones',

    {

        NumeroEstacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },                               
       
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,    
    },
              activo: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: '1',   
    },      

          vistaprevia: {
        type: DataTypes.BOOLEAN,
           allowNull: true,
       // defaultValue: '0',    
   },

       tecladovirtual: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: '0',   
    },

       nombretipo: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: '1',   
    },

       nombreproducto: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: '1',   
    },
       administracion: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: '0',   
    },
        },

    {

        tableName: 'estaciones',
        timestamps: false, 
    }
);
module.exports = Estaciones;