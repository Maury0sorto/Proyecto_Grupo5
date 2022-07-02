const { Router } = require('express');
const {body, query } = require('express-validator');
const ControladorInicial = require('../controladores/ControladorInicial');
const ControladorDetalle = require('../controladores/ControladorDetalleCompra');
const rutas = Router();
rutas.get('/', ControladorInicial.Inicio);
rutas.get('/integrantes', ControladorInicial.Integrantes);
rutas.get('/detallecompras', ControladorInicial.detallecompras);  
rutas.post('/detallecompras/listar', ControladorDetalle.Listar);  
rutas.post('/detallecompras/guardar', ControladorDetalle.Guardar);  


module.exports = rutas;