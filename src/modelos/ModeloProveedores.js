const { DataTypes } = require('sequelize');    //tipo de manejo de datos
const db = require('../configuraciones/db');
const Proveedores = db.define(


////// Modelo De proveedores Mauricio  Zavala ///////////
    'proveedores',  //nombre del modelo
    {       //estos son datos de las tablas
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     //   field: 'IdProveedor',
      },

        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
            //field: "Nombre"
        },
        rtn:{
            type: DataTypes.STRING(45),
            allowNull: true ,
         //   field: "RtnProveedor",
        },
        direccion:{
            type: DataTypes.TEXT,
            allowNull: true,
        //    field: "DireccionProveedor",
        },
       fechahora:{
           type: DataTypes.DATE, 
           allowNull: true, 
           defaultValue: new Date(),
       } ,
        correo:{  //hacer validacion de correo 
            type: DataTypes.STRING(250),
            allowNull: true, //
            defaultValue: false,
         //   field: "CorreoProveedor",
        },
    },

    {
        tableName: 'proveedores', //nombre de la tabla, esta debe estar nombrada de igual manera que en la base de datos
        timestamps: false,
    }

    );  

module.exports = Proveedores; //exportacion del modelo