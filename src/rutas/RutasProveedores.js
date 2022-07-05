const { Router } = require('express'); 
const { body, query } = require('express-validator');
//const app = express()
const ControladorProveedores = require('../controladores/ControladorProveedores') ;
const rutas = Router(); 


rutas.get('/', ControladorProveedores.Inicio);
///////////////////////// Listar /////////////////////////
rutas.get('/listar', ControladorProveedores.Listar);
///////////////////////// Fin Listar //////////////////////////


rutas.get('/listar2',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM proveedores', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
});

/////////////////   Filtro //////////////////////
rutas.get('/filtro', 
query('filtro')
.notEmpty().withMessage('Debe escribir el filtro de busqueda del proveedor')
.isLength({min: 3}).withMessage('Debe escribir un filtro de 3 caracteres como mínimo'),
ControladorProveedores.BuscarFiltro);
///////////////////////// Fin Filtro ///////////////////////////////////


////////////////////// Guardar //////////////////////////////////
rutas.post('/guardar',
body('nombre').notEmpty().withMessage('Debe escribir el nombre del proveedor').isLength({min: 8}).withMessage('Debe ingresar un nombre de proveedor con minimo 8 caracteres'), 

body('rtn').notEmpty().withMessage('Debe escribir el rtn de proveedor').isLength({min: 12}).withMessage('Debe ingresar un rtn de proveedor con minimo 12 caracteres'), 
ControladorProveedores.Guardar);
//body('direccion').notEmpty().withMessage('Debe escribir la direccion del proveedor') 
//.isLength({min: 15}).withMessage('La contrasena debe tener como minimo 8 caracteres'), 
////////////////////// Fin Guardar //////////////////////////

////////////////// Eliminar ////////////////////////////////////
rutas.delete('/eliminar',
    query('idProveedor').notEmpty().withMessage('Debe escribir el id del Proveedor')
    .isInt().withMessage('El id del Proveedor debe ser un numero entero'),
    ControladorProveedores.Eliminar);

/////////////////// Fin Eliminae ///////////////////////

module.exports = rutas;