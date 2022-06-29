const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const TelefonoProveedores = db.define(
////// Modelo De telefono de proveedores Mauricio  Zavala ///////////
    'telefonoproveedores',
    {
        idtelefonoproveedores:{
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        contacto: {
            type: DataTypes.STRING(45),  
            allowNull: false,
        },

        telefono:{
            type: DataTypes.STRING(45),  
            allowNull: false,
        },

        idproveedores:{
            type: DataTypes.INTEGER, 
            allowNull: false,
        }
    },
    {
        tableName: 'telefonoproveedores',
        Timestamps: 'false',
    }

 );
 module.exports = TelefonoProveedores;