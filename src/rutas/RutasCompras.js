const {Router}=require('express');
const {body, query} = require('express-validator');

const ControladorCompras = require('../controladores/ControladorCompras');
const rutas = Router();

rutas.get('/', ControladorCompras.Inicio);
rutas.get('/listar', ControladorCompras.Listar);

rutas.get('/listar2',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM compras', (err, rows)=>{
            if(err) return res.send(err)
          
            res.json(rows)
        })
        
    })
});

module.exports = rutas;