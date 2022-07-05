const {Router}=require('express');
const {body, query} = require('express-validator');

const ControladorCompras = require('../controladores/ControladorCompras');
const rutas = Router();

rutas.get('/', ControladorCompras.Inicio);
rutas.get('/listar', ControladorCompras.Listar);

module.exports = rutas;