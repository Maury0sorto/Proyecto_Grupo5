const sequelize = require('sequelize');
const db = new sequelize(

    'compras', //'nombre de la base de datos',  //compras
   'compras', //'el usaurio de la db',  
   'Compras1@', //'contrasenna de la bd', 
    {
        host: 'desofiw.xyz', 
        dialect: 'mysql',
        port: 4306, 

    }
);

module.exports = db; //que aca se encuentra la configuracion de la base de datos