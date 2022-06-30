const {body, validationResult } = require('express-validator');


exports.Inicio = (req, res) =>{
    const listaModulos =[
        {modulo: "Proveedores", ruta: "/api/proveedores"},
        {modulo: "TelefonoProveedores", ruta: "/api/telefonoproveedores"},
    ];
    const msj ={
        Nombre: "El mejor grupo de la historia mundial",
        Seccion: "1301",
        Clase: "Programacion Movil II",
        listaModulos
        
    };
    res.json(msj);
};




///////////////////////////////////////////////////////////////
exports.detallecompras = (req, res) =>{
    const listaModulosCompra =[
        {modulo: "Listar", ruta: "/api/detallecompra/listar"},
        {modulo: "Guardar", ruta: "/api/detallecompra/guardar"},
        {modulo: "Eliminar", ruta: "/api/detallecompra/eliminar"},
        {modulo: "Modificar", ruta: "/api/detallecompra/modificar"},
        
    ];
    const msj ={
        
        listaModulosCompra
    };
    res.json(msj);
};