const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const MovimientoProductos = db.define(
////// Modelo De Movimiento Productos by Oscar Martinez ///////////
    'movimiento_productos',
    {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIcrement: true,
            allowNull:false,
        },
        fechahora: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: false,
        },
        tipo:{
            type: DataTypes.ENUM(/*AQUI NO SE CUALES SON LOS VALORES EN LA BASE DE DATOS (ASIGNAR)*/),  
            allowNull: false, 
            defaultValue: /*'AQUI TAMPOCO SE :)'*/ ''
        },
        cantidad:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        existencia:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        } ,
        existenciaactual:{  
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        descripcion:{
            type: DataTypes.TEXT, 
            allowNull: true, 
        },
        productos_Codigo:{
            type: DataTypes.STRING(15), 
            allowNull: false, 
        },
        inventarios_id:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
        idusuario:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    },

    {
        tableName: 'movimiento_productos',
        timestamps: 'false',
    }

    );  

module.exports = MovimientoProductos;