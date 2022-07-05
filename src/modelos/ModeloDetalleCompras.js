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
       
    },

    {
        tableName: 'detalle_compras',
        timestamps: false,
    }

    );  

////////////////////////////////////
    Productos.hasMany(Productos,{
        foreignKey: 'productos_Codigo',
        otherKey: 'id'
     });
    
     DetalleCompras.belongsTo(Productos,{
        foreignKey: 'productos_Codigo',
        otherKey: 'id'
     });


/////////////////////////////////////////////
Compras.hasMany(DetalleCompras,{
    foreignKey: 'compras_id',
    otherKey: 'id'
});
    
DetalleCompras.belongsTo(Compras,{
    foreignKey: 'compras_id',
    otherKey: 'id'
});

///////////////////////////////////
module.exports = DetalleCompras;