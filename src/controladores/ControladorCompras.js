const {body, validationResult, query } = require ('express-validator');
const ModeloCompras = require('../modelos/ModeloCompras');
const Factura = require('../modelos/ModeloCompras');
const Usuario = require('../modelos/ModeloCompras');
const msjRes = require('../../src/componentes/mensaje');


///////////////////////////////////////////////////////////////////////////
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
  ///////////////////////////////////////////////////////////////////


  exports.Inicio = async (req, res)=>{
    var msj = validacion(req);
    const listaModulos = 
    [
      
        { 
          modulo: "Compras", 
          rutas:[
            {
              ruta:"api/compras",
              metodo:"get",
              parametros:"",
              descripcion: "Inicio del módulo de Compras"
            },
            {
              ruta:"api/compras/listar",
              metodo:"get",
              parametros:"",
              descripcion: "Lista todas las compras"
            },
            {
              ruta:"api/compras/guardar",
              metodo:"post",
              parametros:{
                numerofactura: "Numero De la Factura. Obligatorio",
                tipopago: "Tipo de Pago de la factura. Obligatorio",
                exento: "Exento de la factura. Obligatorio",
                impuesto15: "cantidad de impuesto15. Obligatorio",
                impuesto18: "cantidad de impuesto18. Obligatorio",
                exonerado: "Exonerado de la factura. Obligatorio",
                total: "Total de la factura. Obligatorio",
                usuarios_idregistro: "Id de usuario de la factura. Obligatorio",
                proveedores_id: "Id de proveedor de la factura. Obligatorio",
                estaciones_NumeroEstacion: "Numero de estacion de la factura. Obligatorio",
  
              },
              descripcion: "Guardar todos los datos de las Compras"
            },
          ],
        }
  
    ];
    const datos = {
      api: "API-PROYECTO GRUPO 5",
      descripcion: "Interfaz de progamación de compras",
      Modulo:"Compras",
      propiedad: "Grupo5",
      desarrollador: "Mauricio Zavala Osorto",
      colaboradores: "",
      fecha: "28/08/2000",
      listaModulos
  };
  msj.datos=datos;
      msjRes(res, 200, msj);
  };


  ///////////////////// Funcion listar /////////////////////////////
exports.Listar = async (req,res)=>{   //Esta es listar o guardar
    var msj = {
      mensaje: '' 
    }
    try{
  
      const lista = await ModeloCompras.findAll(); 
      console.log(JSON.stringfy(lista, null, 2));  
      msj.mensaje = 'Peticion procesada correctamente ';
       
      res.json(lista); 
    } catch (error) {
      console.error(error); 
         msj.mensaje = (error); 
         msj.mensaje = 'Ocurrio un error';
         res.json(msj);  
    }   
      }
  
  
    ///////////////////// Fin Funcion listar /////////////////////////////


    ////////////////////// Inicio Funcion Guardar ////////////////////////////
  /*exports.Guardar = async (req, res) => {
    const validaciones = validationResult(req);

    
        const {numerofactura, idproveedores, idregistrousuario, tipopago,total} = req.body;
        const msj = {
                mensaje: " "  
        };
    
    
        if(validaciones.errors.length > 0 ) 
        {
          validaciones.errors.forEach(element => {
            msj.mensaje+=element.msg + '. ';
    
          });
        }
        else{
              try{  
                    const buscarFactura = Factura.findOne({ 
                        where:{
                          numerofactura:numerofactura
                        }
                    });
                    if(buscarFactura){  
                        msj.mensaje += 'El numero de factura ya existe ';
                    }
                    else{
                         const buscarProveedor = Factura.findOne({
                             where: {
                                 idproveedores
                             }
                         });
                         if(buscarProveedor){
                            msj.mensaje += 'El proveedor ya tiene registro de ventas  ';
                        } 
                        else{
                            const buscarUsuario = Usuario.findOne({
                                    where:{
                                      idregistrousuario: idregistrousuario
                                    }
                            });
                            if(!buscarUsuario)
                            {
                                msj.mensaje += 'El registro decompra de usuario no existe.  ';
                            }
                            else{
                                msj.mensaje ='Peticion procesada con exito';
                            }
                        }        
                    }

                  if(!idregistrousuario){
                    await ModeloCompras.create({
                      numerofactura: numerofactura
                    });
                  }
                   else{
                     await ModeloCompras.create({
                      numerofactura: numerofactura,
                      idproveedores: idproveedores,
                      idregistrousuario: idregistrousuario,
                      tipopago: tipopago,
                      total: total
                     
                     });
                   }
                   msj.mensaje = 'Peticion ejecutada correctamente';
                   } catch (error) {
                    msj.mensaje= 'Error al guardar los datos';
                  }   
        }
       
       
        msj.mensaje = 'Datos Guardados Exitosamente';

    res.json(msj); 
    }; */
    

    //////////////////////////// Fin Funcion Guardar //////////////////