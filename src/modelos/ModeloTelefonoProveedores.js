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
          //  field: "IdTelefonoProveedor"
        },

        contacto: {
            type: DataTypes.STRING(45),  
            allowNull: false,
         //   field: "ContactoTelefonoProveedor",
        },

        telefono:{
            type: DataTypes.STRING(45),  
            allowNull: false,
         //   field: "TelefonoProveedor",
        }
      
    },
    {
        tableName: 'telefono_proveedores',
        Timestamps: 'false',
    }

 );

 Proveedores.hasMany(Proveedores,{
    foreignKey: 'proveedores_id',
    otherKey: 'id'
 });

 Telefono.belongsTo(Proveedores,{
    foreignKey: 'proveedores_id',
    otherKey: 'id'
 }); 

 module.exports = Telefono;