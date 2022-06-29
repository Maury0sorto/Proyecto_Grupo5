const sequelize = require('sequelize');
const db = new sequelize(

    'movil2', //'nombre de la base de datos',  //sifcon
   'root', //'el usaurio de la db',  //movil2
   '123456', //'contrasenna de la bd', //ProgramacionMovil2@
    {
        host: 'localhost', //si esta en esta pc la base sino poner la ip de la maquina en la que este '192.168.50.192',
        dialect: 'mysql',
        port: 3306, //puerto del mysql

    }
);

module.exports = db; //que aca se encuentra la configuracion de la base de datos