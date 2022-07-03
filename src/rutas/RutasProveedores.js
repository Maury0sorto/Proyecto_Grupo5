const { Router } = require('express'); 
const { body, query } = require('express-validator');
const ControladorProveedores = require('../controladores/ControladorProveedores') ;
const rutas = Router(); 


rutas.get('/', ControladorProveedores.Inicio);
///////////////////////// Listar /////////////////////////
rutas.get('/listar', ControladorProveedores.Listar);
///////////////////////// Fin Listar /////////////////////////

////////////////////// Guardar //////////////////////////////////
rutas.post(' /guardar' ,
body('nombre').notEmpty().withMessage('Debe escribir el nombre del proveedor') 
.isLength({min: 8}).withMessage('Debe ingresar un nombre de proveedor con minimo 8 caracteres'), 

body('rtn').notEmpty().withMessage('Debe escribir el rtn de proveedor') 
.isLength({min: 13}).withMessage('Debe ingresar un rtn de proveedor con minimo 13 caracteres'), 

body('direccion').notEmpty().withMessage('Debe escribir la direccion del proveedor') 
.isLength({min: 15}).withMessage('La contrasena debe tener como minimo 8 caracteres'), 

ControladorProveedores.Guardar);
////////////////////// Fin Guardar //////////////////////////

module.exports = rutas;