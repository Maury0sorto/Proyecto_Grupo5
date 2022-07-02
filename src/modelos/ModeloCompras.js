const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const Compras = db.define(
    'compras',
    {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIcrement: true,
            allowNull:false,
        },
        numerofactura:{
            type: DataTypes.STRING(45),
            allowNull:false,
        },
        idproveedores:{
            type: DataTypes.INTEGER, 
            foreignKey: true,
            allowNull: false,
        },

        idregistrousuario:{
            type: DataTypes.INTEGER, 
            foreignKey: true,
            allowNull: false,
        }  ,

        tipopago: {
            type: DataTypes.ENUM('CONTADO','CREDITO'),
            allowNull: true,
            defaultValue: 'CONTADO'
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
        },

        descuentos:{
            type: DataTypes.DOUBLE,  
            allowNull: true, 
            defaultValue: 0
        },
        exento:{
            type: DataTypes.DOUBLE,  
            allowNull: false 
            
        },
        impuesto15:{
            type: DataTypes.DOUBLE,  
            allowNull: false 
            
        },
        impuesto18:{
            type: DataTypes.DOUBLE,  
            allowNull: false 
            
        },
        exonerado:{
            type: DataTypes.DOUBLE,  
            allowNull: false 
            
        },
        total:{
            type: DataTypes.DOUBLE,  
            allowNull: false
           
        },
        anular:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        },

    },
    {
        tableName: 'compras',
        timestamps: 'false',
    }
    );  

    module.exports = Compras;