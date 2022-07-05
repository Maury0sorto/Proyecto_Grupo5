const { Router } = require('express'); 
const { body, query } = require('express-validator');
const ControladorTelefono = require('../controladores/ControladorTelefonoProveedores') ;
const rutas = Router(); 


rutas.get('/', ControladorTelefono.Inicio);

///////////////////////// Listar /////////////////////////
rutas.get('/listar', ControladorTelefono.Listar);
///////////////////////// Fin Listar /////////////////////////

/////////////////////// Guardar  //////////////////////////////////
rutas.post('/guardar' ,
body('Telefono').notEmpty().withMessage('Debe escribir el numero de telefono del proveedor') 
.isLength({min: 8}).withMessage('Debe ingresar un telefono con minimo 8 caracteres'), 

body('Id').notEmpty().withMessage('Debe escribir id del Proveedor') 
.isInt().withMessage('El id del Proveedor debe ser un numero entero'),

ControladorTelefono.Guardar);
////////////////////// Fin Guardar //////////////////////////

////////////////// Eliminar ////////////////////////////////////
rutas.delete('/eliminar',
    query('Telefono').notEmpty().withMessage('Debe escribir el numero de telefono del Proveedor')
    .isLength({min: 8}).withMessage('Debe ingresar un telefono con minimo 8 caracteres'), 
    ControladorTelefono.Eliminar);

/////////////////// Fin Eliminar ///////////////////////

module.exports = rutas;