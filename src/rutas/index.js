const { Router } = require('express');
const {body, query } = require('express-validator');
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