const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const Productos = db.define(
////// Modelo De Productos  Eyleen Tejada///////////
    'productos',
    {
        codigo: {
            type: DataTypes.STRING(15),
            primarykey: true,
            autoIcrement: true,
            /*defaultValue:  '' No se si el codigo debe ser autoincremental o por default*/
            allowNull:false,
        },
        nombre: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(250),  
            allowNull: false, 
        },
        tipo_producto:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        existencia:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        } ,
        precio:{  
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: false
        },
        costo:{
            type: DataTypes.DOUBLE, 
            allowNull: true, 
            defaultValue: false
        },
        cantidad_minima:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        },
        exento:{
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
        },
        // imagen:{
        //     type: DataTypes.LONGBLOB,
        //     allowNull:false,
        //     defaultValue: false,
        // },
        habilitado:{
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            /*defaultValue:  '' declarar el estado del producto*/
        },
        tipo2:{
            type: DataTypes.ENUM(''), 
            allowNull: false, 
            defaultValue:'',
        },
        orden:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
        impuestov:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        } ,
        impuesto_valor:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        } ,
        ultimo:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        } ,
        // nombre_imagen:{
        //     type: DataTypes.STRING(250), 
        //     allowNull: false, 
        // } ,
        id_principal:{
            type: DataTypes.STRING(15), 
            allowNull: false, 
        } ,
        cantidad_principal:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        } ,
        id_usuario:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
        } ,
        movimiento:{
            type: DataTypes.STRING(45), 
            allowNull: false, 
        } ,
    },

    {
        tableName: 'productos',
        timestamps: 'false',
    }

    );  

module.exports = Productos;