const {Router}=require('express');
const {body, query} = require('express-validator');

const ControladorProductos = require('../controladores/ControladorProductos');
const rutas = Router();


module.exports = rutas;