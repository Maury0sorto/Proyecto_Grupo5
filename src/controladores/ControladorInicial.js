const {body, validationResult } = require('express-validator');



exports.Inicio = (req, res) =>{
    const listaModulos =[
        {modulo: "Proveedores", ruta: "/api/proveedores"},
        //{"Listar Proveedores", ruta: "/api/listarproveedores"},
        {modulo: "Telefono", ruta: "/api/telefono"},
    ];
    const msj ={
        Nombre: "API Grupo5 Compras",
        Seccion: "1301",
        Clase: "Programacion Movil II",
        listaModulos
        
    };
    res.json(msj);
};




///////////////////////////////////////////////////////////////
// exports.detallecompras = (req, res) =>{
//     const listaModulosCompra =[
//         {modulo: "Listar", ruta: "/api/detallecompra/listar"},
//         {modulo: "Guardar", ruta: "/api/detallecompra/guardar"},
//         {modulo: "Eliminar", ruta: "/api/detallecompra/eliminar"},
//         {modulo: "Modificar", ruta: "/api/detallecompra/modificar"},
        
//     ];
//     const msj ={
        
//         listaModulosCompra
//     };
//     res.json(msj);
// };

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