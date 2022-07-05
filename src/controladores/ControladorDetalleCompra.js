const {body, validationResult, query } = require ('express-validator');
const ModeloDetalleCompras = require('../modelos/ModeloDetalleCompras'); 
const msjRes = require('../../src/componentes/mensaje');

function validacion (req){
  const validaciones = validationResult(req);
  var errores = [];
  var error = {
      mensaje: '',
      parametro: '',
  };
  var msj = {
      estado: 'correcto',
      mensaje: 'Peticion ejecutada correctamente',
      datos: '',
      errores: ''
  };
  
  if(validaciones.errors.length > 0)
  {
      validaciones.errors.forEach(element => {
          error.mensaje = element.msg;
          error.parametro = element.param;
          errores.push(error);
      });
      msj.estado = 'precaucion';
      msj.mensaje = 'La peticion no se ejecuto';
      msj.errores = errores;
      
  }
  return msj;
};
///////////////////////////////////////////////////////
exports.Inicio = async (req, res)=>{
  var msj = validacion(req);
  const listaModulos = 
  [
    
      { 
        modulo: "DetalleCompra", 
        rutas:[
          {
            ruta:"api/detallecompras",
            metodo:"get",
            parametros:"",
            descripcion: "Inicio del módulo de Detalle Compras"
          },
          {
            ruta:"api/detallecompras/listar",
            metodo:"get",
            parametros:"",
            descripcion: "Lista la tabla de Detalle COmpras"
          },
          {
            ruta:"api/detallecompras/guardar",
            metodo:"post",
            parametros:{
              numero: "Numero de detalle compra. Obligatorio",
              costo: "costo de producto. Obligatorio",
              compras_id: "id de compra. Obligatorio",
              codigoProducto: "Codigo de Producto. Obligatorio",

            },
            descripcion: "Guardar todos los datos de  Detalle Compra"
          },
        ],
      }

  ];
  const datos = {
    api: "API-PROYECTO GRUPO 5",
    descripcion: "Interfaz de progamación de compras",
    propiedad: "Grupo5",
    desarrollador: "Oscar Eduardo Martinez",
    colaboradores: "Maury Zavala",
    fecha: "25/08/1999",
    listaModulos
};
msj.datos=datos;
    msjRes(res, 200, msj);
};
///////////////////// Funcion listar /////////////////////////////
exports.Listar = async (req,res)=>{  
  var msj = {
    mensaje: '' 
  }
  try{

    const lista = await ModeloDetalleCompras.findAll(); 
    console.log(JSON.stringfy(lista));  
    msj.mensaje = 'Peticion procesada correctamente ';
     
    res.json(lista); 
  } catch (error) {
    console.error(error); 
       msj.mensaje = (error); 
       msj.mensaje = 'Ocurrio un error';
       res.json(msj);  
  }   
};


  ///////////////////// Fin Funcion listar /////////////////////////////

  exports.Guardar = async (req, res) => {
    const validaciones = validationResult(req);
    //console.log(validaciones.errors);
    //console.log(req.body);
    
        const {cantidad, costo, costoanterior, impuesto, grabaexento, nota, comprasid, productos_Codigo} = req.body;
        const msj = {
                mensaje: " "  // solo para dar valor al objeto
        };
    
    
        if(validaciones.errors.length > 0 ) // condicio sin vine vacio
    {
      validaciones.errors.forEach(element => {
        msj.mensaje+=element.msg + '. ';

      });
    }
    else{
          try{
              // if (!cantidad){
              //   await ModeloCargo.create({
              //     NombreCargo: nombre
              //   });
              // }
              //  else{
                 await ModeloDetalleCompras.create({
                   cantidad: cantidad,
                   costo: costo,
                   costoanterior: costoanterior,
                   impuesto: impuesto,
                   grabaexento: grabaexento,
                   nota:nota,
                   comprasid:comprasid,
                   productos_Codigo:productos_Codigo
                 });
              //  }
               msj.mensaje = 'Peticion ejecutada correctamente';
               } catch (error) {
                msj.mensaje= 'Error al guardar los datos';
              }   
    }
    
res.json(msj); 
};
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////
