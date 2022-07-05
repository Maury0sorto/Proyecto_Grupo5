const { DataTypes } = require('sequelize');
const db = require('../configuraciones/db');
const Empleado = require('./ModeloEmpleado');
const bcrypt = require('bcrypt');

const Usuario = db.define(
   
    'usuario',
    
    {
        registro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },
        LoginUsuario: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,

        },
      
        Contrasena: {
            type: DataTypes.STRING(250),
            allowNull: false,

        },
        AccesoTotal: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,

        },
        Habilitado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true,

        },
        pin: {
            type: DataTypes.STRING(4),
            allowNull: true,
            defaultValue: '0000',

        },
        fallidos: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        correo: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true,
        },
        estado: {
            type: DataTypes.ENUM('BL', 'AC', 'IN'),
            allowNull: true,
            defaultValue: 'AC',
        }
    },

    {
       
        tableName: 'usuarios',
        timestamps: false, 
        hooks: {
            beforeCreate(usuario) {
                const hash = bcrypt.hashSync(usuario.contrasena, 10);
                usuario.contrasena = hash;
            },
            beforeUpdate(usuario) {
                const hash = bcrypt.hashSync(usuario.contrasena, 10);
                usuario.contrasena = hash;
            },
        }

    }
);

Empleado.hasMany(Usuario,{             //llaves foraneas que exige
    foreignKey: 'idregistro',
    otherKey: 'id'
 });

 Usuario.belongsTo(Empleado,{
    foreignKey: 'idregistro',
    otherKey: 'id'
 }); 

Usuario.prototype.VerificarConttrasena = (con, com) => {
    return bcrypt.compareSync(con, com);
};
module.exports = Usuario;