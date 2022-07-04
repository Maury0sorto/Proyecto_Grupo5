const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const Productos = require('./ModeloProductos');//
const Compras = require('./ModeloCompras');//
const DetalleCompras = db.define(
////// Modelo De Detalle Compras by Oscar Martinez ///////////
    'detalle_compras',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIcrement: true,
            allowNull:false,
            field: 'CodigoCompras',
        },
        cantidad: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: 'Cantidad de Compra',
        },
        costo:{
            type: DataTypes.DOUBLE,
            allowNull: false, 
            field: 'COsto de la Compra',
        },
        costoanterior:{
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: 'Costo anterior de la compra',
        },
        impuesto:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: 'Impuesto sobre la compra',
        } ,
        grabadoexento:{  
            type: DataTypes.CHAR(1),
            allowNull: false,
            field: 'Grabado Exento de la compra',
        },
        nota:{
            type: DataTypes.STRING(250), 
            allowNull: true, 
            field: 'Nota',
        },
        // compras_id:{
        //     type: DataTypes.INTEGER, 
        //     allowNull: false, 
        //     field: 'Id de la compra',
        // },
        // productos_Codigo:{
        //     type: DataTypes.STRING(15), 
        //     allowNull: true,
        //     field: 'Codigo del producto', 
        // }
    },

    {
        tableName: 'detalle_compras',
        timestamps: 'false',
    }

    );  

    Productos.hasMany(Productos,{
        foreignKey: 'idproductos',
        otherKey: 'id'
     });
    
     DetalleCompras.belongsTo(Productos,{
        foreignKey: 'idproductos',
        otherKey: 'id'
     });

Compras.hasMany(Compras,{
    foreignKey: 'idcompras',
    otherKey: 'id'
});
    
DetalleCompras.belongsTo(Compras,{
    foreignKey: 'idcompras',
    otherKey: 'id'
});
module.exports = DetalleCompras;