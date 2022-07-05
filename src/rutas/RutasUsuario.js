const { Router } = require('express'); 
const { body, query } = require('express-validator');
//const ControladorTelefono = require('../controladores/ControladorTelefonoProveedores') ;
const rutas = Router(); 

rutas.get('/listar2',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM usuarios', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
});



module.exports = rutas;