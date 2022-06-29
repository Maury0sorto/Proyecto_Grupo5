const { Router } = require('express'); 
const { body, query } = require('express-validator');
const ControladorProveedores = require('../controladores/ControladorProveedores') ;
const rutas = Router(); 


module.exports = rutas;