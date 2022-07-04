const {body, validationResult } = require('express-validator');
<<<<<<< HEAD


exports.Inicio = (req, res) =>{
    const listaModulos =[
        {modulo: "Proveedores", ruta: "/api/proveedores"},
        //{"Listar Proveedores", ruta: "/api/listarproveedores"},
        {modulo: "Telefono", ruta: "/api/telefono"},
    ];
=======

exports.Inicio = (req, res) =>{
    
>>>>>>> 222e02d13800516b496314ac574d5321ce5c8ed1
    const msj ={
        Nombre: "API Grupo5 Compras",
        Seccion: "1301",
        Clase: "Programacion Movil II",
        listaModulos
        
    };
    res.json(msj);
};

<<<<<<< HEAD



///////////////////////////////////////////////////////////////
exports.detallecompras = (req, res) =>{
    const listaModulosCompra =[
        {modulo: "Listar", ruta: "/api/detallecompra/listar"},
        {modulo: "Guardar", ruta: "/api/detallecompra/guardar"},
        {modulo: "Eliminar", ruta: "/api/detallecompra/eliminar"},
        {modulo: "Modificar", ruta: "/api/detallecompra/modificar"},
=======
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
>>>>>>> 222e02d13800516b496314ac574d5321ce5c8ed1
        
    ];
    const msj ={
        
        listaModulosCompra
    };
    res.json(msj);
};

////////////////////////////////////////////////////////////////







///// Prueba Post //////////////
exports.EjemploPost = (req, res) => {
    console.log(req.body); 
    const{ prueba } = req.body;

    const msj = {
        mensaje: "Ninguno"  
    };


    if(!prueba) 
    {

    msj.mensaje = 'Debe escribir todos los campos ';

    }
    else{

    msj.mensaje = 'datos ingresados con exito';
    }
    res.json(msj); 

    };

/////////////////////////////////