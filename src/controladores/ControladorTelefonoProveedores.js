const {body, validationResult, query } = require ('express-validator');
const ModeloTelefonoProveedores = require('../modelos/ModeloTelefonoProveedores'); 
const msjRes = require('../../src/componentes/mensaje');


const  Idpro = require('../modelos/ModeloTelefonoProveedores'); 
const  Tel = require('../modelos/ModeloTelefonoProveedores'); 


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
        modulo: "Telefono", 
        rutas:[
          {
            ruta:"api/telefono",
            metodo:"get",
            parametros:"",
            descripcion: "Inicio del módulo de Telefono de los Proveedores"
          },
          {
            ruta:"api/telefono/listar",
            metodo:"get",
            parametros:"",
            descripcion: "Lista todos los Teleonos de Proveedores"
          },
          {
            ruta:"api/telefono/guardar",
            metodo:"post",
            parametros:{
              nombre: "Nombre de proveedor. Obligatorio",
             
            },
            descripcion: "Guardar todos los datos de los Telefonos de los Proveedores"
          },
          {
            ruta:"api/telefono/eliminar",
            metodo:"delete",
            parametros:{
              Telefono: "Numero de telefono de proveedor. Obligatorio",
             
            },
            descripcion: "Eliminar un numero de telefono de proveedor"

          },
        ],
      }

  ];
  const datos = {
    api: "API-PROYECTO GRUPO 5",
    descripcion: "Interfaz de progamación de compras",
    modulo: "Telefono Proveedores",
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
exports.Listar = async (req,res)=>{  
  var msj = {
    mensaje: '' 
  }
  try{

    const lista = await ModeloTelefonoProveedores.findAll(); 
    console.log(JSON.stringfy(lista, null));  
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

    
        const {contacto, telefono, idproveedores} = req.body;
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
                    const buscarContacto= Tel.findOne({ 
                        where:{
                          contacto:contacto
                        }
                    });
                    if(buscarContacto){  
                        msj.mensaje += 'El contacto ya existe ';
                    }
                    else{
                         const buscarTelefono = Tel.findOne({
                             where: {
                              telefono
                             }
                         });
                         if(buscarTelefono){
                            msj.mensaje += 'El telefono ya existe.  ';
                        } 
                        else{
                            const buscaridproveedores = Idpro.findOne({
                                    where:{
                                      idproveedores: idproveedores
                                    }
                            });
                            if(!buscaridproveedores)
                            {
                                msj.mensaje += 'El id de proveedor no existe.  '; */
                       //     }
                        //    else{
                     //           msj.mensaje ='Peticion procesada con exito';
                      //      }
                   //     }        
                //    }
                
               // } 
        
                //} 

//>>

              //    if(!idproveedores){
               //     await ModeloTelefonoProveedores.create({
                //      idproveedores: idproveedores
               //     });
              //    }
               //    else{
                 //    await ModeloTelefonoProveedores.create({
                       
                   //    contacto: contacto,
                 //      telefono: telefono,
                   //    idproveedores: idproveedores
                  
                     
                   //  });
                  // }
                 //  msj.mensaje = 'Peticion ejecutada correctamente';
                //   } catch (error) {
                //    msj.mensaje= 'Error al guardar los datos';
               //   }   
      //  }
        
    //res.json(msj); 
    //}; //
    

    //////////////////////////// Fin Funcion Guardar //////////////////

    
    exports.Guardar = async(req, res) => {
      const validaciones = validationResult(req);
      console.log(validaciones.errors[0]);
      console.log(req.body);
      const { telefono, proveedores_id } = req.body;
     // const { nombre } = req.body;
      var msj = {
          mensaje: ''
      };
      if (validaciones.errors.length > 0) {
          validaciones.errors.forEach(element => {
              msj.mensaje += element.msg + ' . ';
  
          });
  
      } else {
          try {
              if (!telefono) {
                  await ModeloTelefonoProveedores.create({
                    telefono: telefono,
  
                  });
              } else {
                 await ModeloTelefonoProveedores.create({
                  telefono: telefono,
                  id: proveedores_id
                 });
              }
  
              msj.mensaje = 'Registro Guardado correctamente'; //
  
          } catch (error) {
              console.error(error);
              msj.mensaje = 'Error Al Guardar los Datos ';
          }
  
      }
      res.json(msj);
  };
   //////////////////////////// Fin Funcion Guardar //////////////////

   /////////////////////////  Eliminar ////////////////////////////////////////

   exports.Eliminar = async(req, res) => {
    const validaciones = validationResult(req);
    console.log(validaciones.errors[0]);
    console.log(req.body);
    const { idproveedores, telefono  } = req.query;
    const msj = {

        mensaje: ""

    };

    if (validaciones.errors.length > 0) {
        validaciones.errors.forEach(element => {
            msj.mensaje += element.msg + ' . ';

        });

    } else {
        try {
            var buscarTelProveedor = await ModeloTelefonoProveedores.findOne({
                where: {
                  Telefono: telefono
                }

            });
            if (!buscarTelProveedor) {
                msj.mensaje = 'No Existe el telefono Del Proveedor';
            } else {
                await ModeloProveedores.destroy({
                    where: {
                     Telefono: telefono
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