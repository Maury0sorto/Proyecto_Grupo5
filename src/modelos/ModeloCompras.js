const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
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
        idproveedores:{
            type: DataTypes.INTEGER, 
            foreignKey: true,
            allowNull: false,
            field: "IdProveedores",
        },

        idregistrousuario:{
            type: DataTypes.INTEGER, 
            foreignKey: true,
            allowNull: false,
            field: "idregistro",
        }  ,

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
        estaciones_NumeroEstacion:{
            type: DataTypes.INTEGER, 
            foreignKey: true,
            allowNull: false,
            field: "NumeroEstacion",
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
        timestamps: 'false',
    }
    );  

    module.exports = Compras;