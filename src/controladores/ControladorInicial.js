const {body, validationResult } = require('express-validator');

exports.Inicio = (req, res) =>{
    
    const msj ={
        Nombre: "El mejor grupo de la historia mundial",
        Seccion: "1301",
        Clase: "Programacion Movil II",
        
    };
    res.json(msj);
};

exports.Integrantes = (req, res) =>{
    
    const msj ={
        Integrantes: "Oscar Martinez y Maury Zavala",
        Seccion: "1301",
        Clase: "Programacion Movil II",
        
    };
    res.json(msj);
};

exports.detallecompras = (req, res) =>{
    const listaModulos =[
        {modulo: "Listar", ruta: "/api/detallecompras/listar"},
        {modulo: "Guardar", ruta: "/api/detallecompras/guardar"},
        {modulo: "Eliminar", ruta: "/api/detallecompras/eliminar"},
        {modulo: "Modificar", ruta: "/api/detallecompras/modificar"},
        
    ];
    const msj ={
        
        listaModulos
    };
    res.json(msj);
};