const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const Proveedores = require('./ModeloProveedores');//
const Telefono = db.define(
////// Modelo De telefono de proveedores Mauricio  Zavala ///////////
    'telefonoproveedores',
    {
        id:{
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
        }
        //,

       // idproveedores:{
          //  type: DataTypes.INTEGER, 
          //  foreignKey: true,
         //   allowNull: false,
      //  }
    },
    {
        tableName: 'telefono_proveedores',
        Timestamps: 'false',
    }

 );

 Proveedores.hasMany(Proveedores,{
    foreignKey: 'idproveedores',
    otherKey: 'id'
 });

 Telefono.belongsTo(Proveedores,{
    foreignKey: 'idproveedores',
    otherKey: 'id'
 });

 module.exports = Telefono;