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
            allowNull: true ,
            defaultValue: false,
         //   field: "ContactoTelefonoProveedor",
        },

        telefono:{
            type: DataTypes.STRING(45),  
            allowNull: true ,
            defaultValue: false,
         //   field: "TelefonoProveedor",
        },

      /*  proveedores_id:{
            type: DataTypes.INTEGER,  
            allowNull: true ,
            defaultValue: false,
        } */
      
    },
    {
        tableName: 'telefono_proveedores',
        timestamps: false,
    }

 );

 Proveedores.hasMany(Telefono,{
    foreignKey: 'proveedores_id',
    otherKey: 'id'
 });

 Telefono.belongsTo(Proveedores,{
    foreignKey: 'proveedores_id',
    otherKey: 'id'
 }); 

 module.exports = Telefono;