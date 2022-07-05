
const {body, validationResult, query } = require ('express-validator');
//const Proveedores = require('../modelos/ModeloProveedores');
const ModeloProveedores = require('../modelos/ModeloProveedores');
const msjRes = require('../../src/componentes/mensaje');

const  Provee = require('../modelos/ModeloProveedores'); 
const  Rt = require('../modelos/ModeloProveedores'); 

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
        modulo: "Proveedores", 
        rutas:[
          {
            ruta:"api/proveedores",
            metodo:"get",
            parametros:"",
            descripcion: "Inicio del módulo de Proveedores"
          },
          {
            ruta:"api/proveedores/listar",
            metodo:"get",
            parametros:"",
            descripcion: "Lista todos los Proveedores"
          },
          {
            ruta:"api/proveedores/guardar",
            metodo:"post",
            parametros:{
              nombre: "Nombre de proveedor. Obligatorio",
              rtn: "RTN de el proveedor. Obligatorio",
              correo: "Correo del proveedor. Obligatorio",

            },
            descripcion: "Guardar todos los datos de los Proveedores"
          },
        ],
      }

  ];
  const datos = {
    api: "API-PROYECTO GRUPO 5",
    descripcion: "Interfaz de progamación de compras",
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

    const lista = await ModeloProveedores.findAll(); 
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
 /* exports.Guardar = async (req, res) => {
    const validaciones = validationResult(req);

    
        const {nombre, rtn, direccion, correo} = req.body;
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
                    const buscarNombre = Provee.findOne({ 
                        where:{
                            nombre:nombre
                        }
                    });
                    if(buscarNombre){  
                        msj.mensaje += 'El Nombre ya existe ';
                    }
                    else{
                         const buscarCorreo = Provee.findOne({
                             where: {
                                 correo
                             }
                         });
                         if(buscarCorreo){
                            msj.mensaje += 'El correo ya existe.  ';
                        } 
                        else{
                            const buscarRTN = Rt.findOne({
                                    where:{
                                        rtn: rtn
                                    }
                            });
                            if(!buscarRTN)
                            {
                                msj.mensaje += 'El rtn de proveedor no existe.  ';
                            }
                            else{
                                msj.mensaje ='Peticion procesada con exito';
                            }
                        }        
                    }

                  if(!rtn){
                    await ModeloProveedores.create({
                      nombre: nombre
                    });
                  }
                   else{
                     await ModeloProveedores.create({
                        nombre: nombre,
                       rtn: rtn,
                       direccion: direccion,
                      // fechahora: fechahora,
                       correo: correo
                     
                     });
                   }
                   msj.mensaje = 'Peticion ejecutada correctamente';
                   } catch (error) {
                    msj.mensaje= 'Error al guardar los datos';
                  }   
        }
       
       
        msj.mensaje = 'Datos Guardados Exitosamente';

    res.json(msj); 
    };
    */

    //////////////////////////// Fin Funcion Guardar //////////////////

    exports.Guardar = async(req, res) => {
      const validaciones = validationResult(req);
      console.log(validaciones.errors[0]);
      console.log(req.body);
     // const { nombre, rtn } = req.body;
      const { nombre } = req.body;
      var msj = {
          mensaje: ''
      };
      if (validaciones.errors.length > 0) {
          validaciones.errors.forEach(element => {
              msj.mensaje += element.msg + ' . ';
  
          });
  
      } else {
          try {
              if (!nombre) {
                  await ModeloProveedores.create({
                    Nombre: nombre,
  
                  });
              } else {
                 await ModeloProveedores.create({
                   Nombre: nombre,
                     Rtn: rtn
                 });
              }
  
              msj.mensaje = 'Registro Guardado correctamente';
  
          } catch (error) {
              console.error(error);
              msj.mensaje = 'Error Al Guardar los Datos ';
          }
  
      }
      res.json(msj);
  };


  /////////////////////////  Eliminar ////////////////////////////////////////

  exports.Eliminar = async(req, res) => {
    const validaciones = validationResult(req);
    console.log(validaciones.errors[0]);
    console.log(req.body);
    const { id } = req.query;
    const msj = {

        mensaje: ""

    };

    if (validaciones.errors.length > 0) {
        validaciones.errors.forEach(element => {
            msj.mensaje += element.msg + ' . ';

        });

    } else {
        try {
            var buscarProveedor = await ModeloProveedores.findOne({
                where: {
                    idProveedor: id
                }

            });
            if (!buscarProveedor) {
                msj.mensaje = 'No Existe el ID Del Proveedor';
            } else {
                await ModeloProveedores.destroy({
                    where: {
                      idProveedor: id
                    }

                });

                msj.mensaje = 'Registro Eliminado Correctamente';
            }
        } catch (error) {
            console.error(error);
            msj.mensaje = 'Error Al Eliminar los Datos ';
        }

    }
    res.json(msj);
};

  /////////////////////////  Fin Eliminar ////////////////////////////////////////