const { DataTypes } = require('sequelize');  
const db = require('../configuraciones/db');
const TipoProducto = require('./ModeloTipoProducto');//
//const Usuario = require('./ModeloUsuario');//

const Productos = db.define(

    'productos',
    {
        Codigo: {
            type: DataTypes.STRING(15),
            primarykey: true,
            autoIcrement: true,
            allowNull:false,
            

        },
        Nombre: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.STRING(250),  
            allowNull: false, 
        },
      
        Existencia:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
           
        } ,
        Precio:{  
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: false,
        },
        Costo:{
            type: DataTypes.DOUBLE, 
            allowNull: true, 
            defaultValue: false,
           

        },
        CantidadMinima:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            
        },
        exento:{
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
           

        },
        /* Imagen:{
             type: DataTypes.LONGBLOB,
            allowNull:false,
            defaultValue: false, 
        }, */
        Habilitado:{
            type: DataTypes.BOOLEAN, 
            allowNull: false,   
            defaultValue: '1',      

        },
        tipo2:{
            type: DataTypes.ENUM('GE','EL','PR','AL'), 
            allowNull: false, 
            defaultValue:'GE',
          

        },
        orden:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
            defaultValue: '1',

        },
        impuestov:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            defaultValue: '0',

        } ,
        impuestoValor:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            defaultValue: '0',

        } ,
        ultimo:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
            defaultValue: '0',

        } ,
         nombre_imagen:{
             type: DataTypes.STRING(250), 
            allowNull: false, 
         } ,

        idprincipal:{
            type: DataTypes.STRING(15), 
            allowNull: false, 
        } ,
        cantidadprincipal:{
            type: DataTypes.DOUBLE, 
            allowNull: false,    

        } ,
         id_usuario:{
             type: DataTypes.INTEGER, 
           allowNull: false, 
        } ,
        movimiento:{
            type: DataTypes.STRING(45), 
            allowNull: false,     
        } ,
    },

    {
        tableName: 'productos',
        timestamps: false,
    }

    );


//////////////////////////////////////////////////////
TipoProducto.hasMany(TipoProducto,{
    foreignKey: 'CodigoTipo',
    otherKey: 'TipoProducto'
});
    
Productos.belongsTo(TipoProducto,{
    foreignKey: 'CodigoTipo',
    otherKey: 'TipoProducto'
});  

//////////////////////////////////////////



module.exports = Productos;