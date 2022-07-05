const { Router } = require('express');
const {body, query } = require('express-validator');
const controladorInicial = require('../controladores/ControladorInicial');


const rutas = Router();


rutas.get('/', controladorInicial.Inicio);
rutas.post('/post/', controladorInicial.EjemploPost);

 


module.exports = rutas;

////// Este archivo sera solo para manjear rutas//////////////
