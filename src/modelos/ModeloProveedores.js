const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const Proveedores = db.define(
////// Modelo De proveedores Mauricio  Zavala ///////////
    'proveedores',
    {
        idproveedores: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIcrement: true,
            allowNull:false,
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        rtn:{
            type: DataTypes.STRING(45),
            allowNull: false, 
        },
        direccion:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        fechahora:{
            type: DataTypes.DATE, 
            allowNull: true, 
            defaultValue: new Date()
        } ,
        correo:{  //hacer validacion de correo 
            type: DataTypes.STRING(250),
            allowNull: true,
            defaultValue: false
        }
    },

    {
        tableName: 'proveedores',
        timestamps: 'false',
    }

    );  

module.exports = Proveedores;