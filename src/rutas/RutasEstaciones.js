const {Router}=require('express');
const {body, query} = require('express-validator');
const ControladorEstaciones = require('../controladores/controladorEstaciones');

const rutas = Router();
rutas.get('/', ControladorEstaciones.Inicio);
rutas.get('/listar', ControladorEstaciones.Listar);


rutas.get('/listar2',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM estaciones', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
rutas.post('/guardar',
body('nombre').notEmpty().withMessage('Debe escribir el nombre de la estacion').isLength({min: 4}).withMessage('Debe ingresar un nombre de estacion con minimo 4 caracteres'), 

ControladorEstaciones.Guardar);

module.exports = rutas;