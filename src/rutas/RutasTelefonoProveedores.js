const { Router } = require('express'); 
const { body, query } = require('express-validator');
const ControladorTelefono = require('../controladores/ControladorTelefonoProveedores') ;
const rutas = Router(); 


rutas.get('/', ControladorTelefono.Inicio);

///////////////////////// Listar /////////////////////////
rutas.get('/listar', ControladorTelefono.Listar);
///////////////////////// Fin Listar /////////////////////////


rutas.get('/listar2',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM telefono_proveedores', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
});



/////////////////////// Guardar  //////////////////////////////////
rutas.post('/guardar' ,
body('telefono').notEmpty().withMessage('Debe escribir el numero de telefono del proveedor') 
.isLength({min: 8}).withMessage('Debe ingresar un telefono con minimo 8 caracteres'), 

//body('idproveedores').notEmpty().withMessage('Debe escribir id del Proveedor') 
//.isInt().withMessage('El id del Proveedor debe ser un numero entero'),

ControladorTelefono.Guardar);
////////////////////// Fin Guardar //////////////////////////

////////////////// Eliminar ////////////////////////////////////
rutas.delete('/eliminar',
    query('Ttelefono').notEmpty().withMessage('Debe escribir el numero de telefono del Proveedor')
    .isLength({min: 8}).withMessage('Debe ingresar un telefono con minimo 8 caracteres'), 
    ControladorTelefono.Eliminar);

/////////////////// Fin Eliminar ///////////////////////

module.exports = rutas;