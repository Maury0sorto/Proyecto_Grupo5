const { Router } = require('express'); 
const { body, query } = require('express-validator');
const ControladorTelefono = require('../controladores/ControladorTelefonoProveedores') ;
const rutas = Router(); 


rutas.get('/', ControladorTelefono.Inicio);

///////////////////////// Listar /////////////////////////
rutas.get('/listar', ControladorTelefono.Listar);
///////////////////////// Fin Listar /////////////////////////


rutas.post(' /guardar' ,
body('contacto').notEmpty().withMessage('Debe escribir el nombre del proveedor') 
.isLength({min: 8}).withMessage('Debe ingresar un nombre de proveedor con minimo 8 caracteres'), 

body('telefono').notEmpty().withMessage('Debe escribir el telefono del empleado') 
.isLength({min: 8}).withMessage('Debe ingresar un telefono de proveedor con minimo 8 caracteres'), 

body('idproveedores').notEmpty().withMessage('Debe escribir el del proveedor') 
.isLength({min: 1}).withMessage('El id de proveedor debe tener como minimo 1 caracteres'), 

ControladorTelefono.Guardar);
////////////////////// Fin Guardar //////////////////////////

module.exports = rutas;