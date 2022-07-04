const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const MovimientoProductos = db.define(
////// Modelo De Movimiento Productos by Oscar Martinez ///////////
    'movimiento_productos',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIcrement: true,
            allowNull:false,
            field: 'Id del movimiento',
        },
        fechahora: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: false,
            field: 'Fecha del movimiento',
        },
        tipo:{
            type: DataTypes.ENUM(/*AQUI NO SE CUALES SON LOS VALORES EN LA BASE DE DATOS (ASIGNAR)*/''),  
            allowNull: false, 
            defaultValue: /*'AQUI TAMPOCO SE :)'*/ '',
            field: 'tipo de movimiento',
        },
        cantidad:{
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: 'Cantidad',
        },
        existencia:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: 'Existencia',
        } ,
        existenciaactual:{  
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        descripcion:{
            type: DataTypes.TEXT, 
            allowNull: true, 
            field: 'Existencia actual',
        },
        productos_Codigo:{
            type: DataTypes.STRING(15), 
            allowNull: false, 
            field: 'Codigo del producto',
        },
        inventarios_id:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
            field: 'Codigo de inventario',
        },
        idusuario:{
            type: DataTypes.INTEGER,
            allowNull:false,
            field: 'codigo de usuario',
        }
    },

    {
        tableName: 'movimiento_productos',
        timestamps: 'false',
    }

    );  

module.exports = MovimientoProductos;