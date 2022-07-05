const sequelize = require('sequelize');
const db = new sequelize(

   // 'Compras', //'nombre de la base de datos',  //compras
   'sigresdesarrollo',
   'compras', 
   'Compras1@', 
    {
        host: 'desofiw.xyz',
       //host: '192.168.50.192',
        dialect: 'mysql',
        port: 4306, 

    }
);

module.exports = db; //que aca se encuentra la configuracion de la base de datos