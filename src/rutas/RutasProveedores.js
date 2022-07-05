const { Router } = require('express'); 
const { body, query } = require('express-validator');
//const app = express()
const ControladorProveedores = require('../controladores/ControladorProveedores') ;
const rutas = Router(); 


rutas.get('/', ControladorProveedores.Inicio);
///////////////////////// Listar /////////////////////////
rutas.get('/listar', ControladorProveedores.Listar);
///////////////////////// Fin Listar //////////////////////////

////////////////////// Guardar //////////////////////////////////
rutas.post('/guardar',
body('Nombre').notEmpty().withMessage('Debe escribir el nombre del proveedor').isLength({min: 8}).withMessage('Debe ingresar un nombre de proveedor con minimo 8 caracteres'), 

body('Rtn').notEmpty().withMessage('Debe escribir el rtn de proveedor').isLength({min: 12}).withMessage('Debe ingresar un rtn de proveedor con minimo 12 caracteres'), 
ControladorProveedores.Guardar);
//body('direccion').notEmpty().withMessage('Debe escribir la direccion del proveedor') 
//.isLength({min: 15}).withMessage('La contrasena debe tener como minimo 8 caracteres'), 
////////////////////// Fin Guardar //////////////////////////

////////////////// Eliminar ////////////////////////////////////
rutas.delete('/eliminar',
    query('id').notEmpty().withMessage('Debe escribir el id del Proveedor')
    .isInt().withMessage('El id del Proveedor debe ser un numero entero'),
    ControladorProveedores.Eliminar);

/////////////////// Fin Eliminae ///////////////////////

module.exports = rutas;