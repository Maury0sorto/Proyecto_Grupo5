const { Router } = require('express');
const {body, query } = require('express-validator');
const controladorInicial = require('../controladores/ControladorInicial');
const rutas = Router();
rutas.get('/', controladorInicial.Inicio);
//rutas.post('/post/',controladorinicial.EjemploPost);
//rutas.get('/detallecompras', ControladorInicial.detallecompras);  


module.exports = rutas;