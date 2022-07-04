const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const TipoProducto = require('./ModeloMovimientoProductos');//
// const Usuario = require('./ModeloUsuario');//

const Productos = db.define(
////// Modelo De Productos  Eyleen Tejada///////////
    'productos',
    {
        codigo: {
            type: DataTypes.STRING(15),
            primarykey: true,
            autoIcrement: true,
            /*defaultValue:  '' No se si el codigo debe ser autoincremental o por default*/
            allowNull:false,
            field: "id de Tabla productos",

        },
        nombre: {
            type: DataTypes.STRING(40),
            allowNull: false,
            field: "Nombre de producto",

        },
        descripcion: {
            type: DataTypes.STRING(250),  
            allowNull: false, 
            field: "descripcion de productos",

        },
        // tipo_producto:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        existencia:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: "Cantidad en existencia",

        } ,
        precio:{  
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: false,
            field: "precio de producto",

        },
        costo:{
            type: DataTypes.DOUBLE, 
            allowNull: true, 
            defaultValue: false,
            field: "Costo de producto",

        },
        cantidad_minima:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: "Cantidad minima de producto",

        },
        exento:{
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            field: "Producto excnto",

        },
        // imagen:{
        //     type: DataTypes.LONGBLOB,
        //     allowNull:false,
        //     defaultValue: false,
        // },
        habilitado:{
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            /*defaultValue:  '' declarar el estado del producto*/
            field: "Producto habilitado",

        },
        tipo2:{
            type: DataTypes.ENUM(''), 
            allowNull: false, 
            defaultValue:'',
            field: "Tipo2 de producto",

        },
        orden:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
            field: "Orden de producto",

        },
        impuestov:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: "Impuesto del producto",

        } ,
        impuesto_valor:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: "Valor de impuesto",

        } ,
        ultimo:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: "ultimo",

        } ,
        // nombre_imagen:{
        //     type: DataTypes.STRING(250), 
        //     allowNull: false, 
        // } ,
        id_principal:{
            type: DataTypes.STRING(15), 
            allowNull: false, 
            field: "Id Principal del producto",

        } ,
        cantidad_principal:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            field: "Cantidad principal",

        } ,
        // id_usuario:{
        //     type: DataTypes.INTEGER, 
        //     allowNull: false, 
        // } ,
        movimiento:{
            type: DataTypes.STRING(45), 
            allowNull: false, 
            field: "Movimiento del producto",

        } ,
    },

    {
        tableName: 'productos',
        timestamps: 'false',
    }

    );
// Usuario.hasMany(Usuario,{
//     foreignKey: 'idusuario',
//     otherKey: 'id'
// });
    
// Productos.belongsTo(Usuario,{
//     foreignKey: 'idusuario',
//     otherKey: 'id'
// });  

TipoProducto.hasMany(TipoProducto,{
    foreignKey: 'idtipo',
    otherKey: 'id'
});
    
Productos.belongsTo(TipoProducto,{
    foreignKey: 'idtipo',
    otherKey: 'id'
});  
module.exports = Productos;