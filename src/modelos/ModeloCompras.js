const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const Usuario = require('./ModeloUsuarios');
const Proveedores = require('./ModeloProveedores');
const Estaciones = require('./ModeloEstaciones');
const e = require('express');
const Compras = db.define(
    'compras',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIcrement: true,
            allowNull:false,
            field: "IdCompras",
        },
        numerofactura:{
            type: DataTypes.STRING(45),
            allowNull:false,
            field: "NumeroFactura",
            
        },
    
        tipopago: {
            type: DataTypes.ENUM('CONTADO','CREDITO'),
            allowNull: true,
            defaultValue: 'CONTADO',
            field: "TipoPago",
        },

        fechahora:{
            type: DataTypes.DATE, 
            allowNull: true, 
            defaultValue: new Date()
        },
        
        descuentos:{
            type: DataTypes.DOUBLE,  
            allowNull: true, 
            defaultValue: 0,
            field: "Descuentos",
        },
        exento:{
            type: DataTypes.DOUBLE,  
            allowNull: false,
            field: "Exento",
            
        },
        impuesto15:{
            type: DataTypes.DOUBLE,  
            allowNull: false,
            field: "Impuesto15",
            
        },
        impuesto18:{
            type: DataTypes.DOUBLE,  
            allowNull: false ,
            field: "Impuesto18",
            
        },
        exonerado:{
            type: DataTypes.DOUBLE,  
            allowNull: false,
            field: "Exonerado",
            
        },
        total:{
            type: DataTypes.DOUBLE,  
            allowNull: false,
            field: "Total",
           
        },
        anular:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0,
            field: "Anular",
        },

    },
    {
        tableName: 'compras',
        timestamps: false,
    }
    );  


    ////////////////////////////////////////////////////////
    Usuario.hasMany(Compras,{
        foreignKey: 'usuarios_idregistro',
        otherKey: 'idregistro'
     });
    
     Compras.belongsTo(Usuario,{
        foreignKey: 'usuarios_idregistro',
        otherKey: 'idregistro'
     }); 
/////////////////////////////////////////////////////////////

Proveedores.hasMany(Compras,{
    foreignKey: 'idproveedores',
    otherKey: 'id'
 });

 Compras.belongsTo(Proveedores,{
    foreignKey: 'idproveedores',
    otherKey: 'id'
 }); 
  //////////////////////////////////////////////////////////////  

  Estaciones.hasMany(Compras,{
    foreignKey: 'estaciones_NumeroEstacion',
    otherKey: 'NumeroEstacion'
 });

 Compras.belongsTo(Estaciones,{
    foreignKey: 'estaciones_NumeroEstacion',
    otherKey: 'NumeroEstacion'
 }); 





    module.exports = Compras;