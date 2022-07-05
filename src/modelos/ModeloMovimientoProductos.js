const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const Productos = require('./ModeloProductos');
const Inventario = require('./ModeloInventarios');
const MovimientoProductos = db.define(
////// Modelo De Movimiento Productos by Oscar Martinez ///////////
    'movimiento_productos',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIcrement: true,
            allowNull:false,
            field: 'Id del movimiento',
        },
        fechahora: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: false,
            field: 'Fecha del movimiento',
        },
        tipo:{
            type: DataTypes.ENUM('INGRESO', 'EGRESO', 'INVENTARIO'),  
            allowNull: false, 
            defaultValue:'INGRESO',
            field: 'tipo de movimiento',
        },
        cantidad:{
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: 'Cantidad',
        },
        existencia:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: 'Existencia',
        } ,
        existenciaactual:{  
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        descripcion:{
            type: DataTypes.TEXT, 
            allowNull: true, 
            field: 'Existencia actual',
        },
    
        idusuario:{
            type: DataTypes.INTEGER,
            allowNull:false,
            field: 'codigo de usuario',
        }
    },

    {
        tableName: 'movimiento_productos',
        timestamps: 'false',
    }

    );  


/////////////////////////////////////////////
Productos.hasMany(MovimientoProductos,{
    foreignKey: 'productos_Codigo',
    otherKey: 'Codigo'
});
    
MovimientoProductos.belongsTo(Productos,{
    foreignKey: 'productos_Codigo',
    otherKey: 'Codigo'
});

///////////////////////////////////



Inventario.hasMany(MovimientoProductos,{
    foreignKey: 'inventarios_id',
    otherKey: 'id'
});
    
MovimientoProductos.belongsTo(Inventario,{
    foreignKey: 'inventarios_id',
    otherKey: 'id'
});

///////////////////////////////////




module.exports = MovimientoProductos;