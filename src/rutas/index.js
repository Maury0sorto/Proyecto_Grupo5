const { Router } = require('express');
const {body, query } = require('express-validator');
<<<<<<< HEAD
const controladorInicial = require('../controladores/ControladorInicial');
//const listarproveedores = require('../controladores/ControladorProveedores');
//const guardarproveedores = require('../controladores/ControladorProveedores');

const rutas = Router();


rutas.get('/', controladorInicial.Inicio);
rutas.post('/post/', controladorInicial.EjemploPost);

//rutas.get('/listarproveedores/', listarproveedores.Listar);
//rutas.get('/guardarproveedores/', guardarproveedores.Guardar);
//rutas.get('/detallecompras', ControladorInicial.detallecompras);  


module.exports = rutas;

////// Este archivo sera solo para manjear rutas//////////////
=======
const ControladorInicial = require('../controladores/ControladorInicial');
const ControladorDetalle = require('../controladores/ControladorDetalleCompra');
const rutas = Router();
rutas.get('/', ControladorInicial.Inicio);
rutas.get('/integrantes', ControladorInicial.Integrantes);
rutas.get('/detallecompras', ControladorInicial.detallecompras);  
rutas.post('/detallecompras/listar', ControladorDetalle.Listar);  
rutas.post('/detallecompras/guardar', ControladorDetalle.Guardar);  


module.exports = rutas;
>>>>>>> 222e02d13800516b496314ac574d5321ce5c8ed1
