const {body, validationResult } = require('express-validator');
// const ModeloPrestamo = require('../modelos/ModeloPrestamo');

exports.Inicio = (req, res) =>{
    // const listaModulos =[
    //     {modulo: "Empleados", ruta: "/api/empleados"},
    //     {modulo: "Clientes", ruta: "/api/clientes"},
    // ];
    const msj ={
        Nombre: "El mejor grupo de la historia mundial",
        Seccion: "1301",
        Clase: "Programacion Movil II",
        
    };
    res.json(msj);
};

exports.detallecompras = (req, res) =>{
    const listaModulos =[
        {modulo: "Listar", ruta: "/api/detallecompra/listar"},
        {modulo: "Guardar", ruta: "/api/detallecompra/guardar"},
        {modulo: "Eliminar", ruta: "/api/detallecompra/eliminar"},
        {modulo: "Modificar", ruta: "/api/detallecompra/modificar"},
        
    ];
    const msj ={
        
        listaModulos
    };
    res.json(msj);
};