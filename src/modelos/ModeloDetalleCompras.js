const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const DetalleCompras = db.define(
////// Modelo De Detalle Compras by Oscar Martinez ///////////
    'detalle_compras',
    {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIcrement: true,
            allowNull:false,
        },
        cantidad: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        costo:{
            type: DataTypes.DOUBLE,
            allowNull: false, 
        },
        costoanterior:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        impuesto:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        } ,
        grabadoexento:{  
            type: DataTypes.CHAR(1),
            allowNull: false,
        
        },
        nota:{
            type: DataTypes.STRING(250), 
            allowNull: true, 
        },
        compras_id:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
        productos_Codigo:{
            type: DataTypes.STRING(15), 
            allowNull: true, 
        }
    },

    {
        tableName: 'detalle_compras',
        timestamps: 'false',
    }

    );  

module.exports = DetalleCompras;