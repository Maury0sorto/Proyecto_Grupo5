const {body, validationResult, query } = require ('express-validator');
const ModeloTelefonoProveedores = require('../modelos/ModeloTelefonoProveedores'); 


const  Idpro = require('../modelos/ModeloTelefonoProveedores'); 
const  Tel = require('../modelos/ModeloTelefonoProveedores'); 

///////////////////// Funcion listar /////////////////////////////
exports.Listar = async (req,res)=>{  
  var msj = {
    mensaje: '' 
  }
  try{

    const lista = await ModeloTelefonoProveedores.findAll(); 
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
  exports.Guardar = async (req, res) => {
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
                                msj.mensaje += 'El id de proveedor no existe.  ';
                            }
                            else{
                                msj.mensaje ='Peticion procesada con exito';
                            }
                        }        
                    }
                
               // } 
        
                //} 

//>>

                  if(!idproveedores){
                    await ModeloTelefonoProveedores.create({
                      idproveedores: idproveedores
                    });
                  }
                   else{
                     await ModeloTelefonoProveedores.create({
                       
                       contacto: contacto,
                       telefono: telefono,
                       idproveedores: idproveedores
                  
                     
                     });
                   }
                   msj.mensaje = 'Peticion ejecutada correctamente';
                   } catch (error) {
                    msj.mensaje= 'Error al guardar los datos';
                  }   
        }
        
    res.json(msj); 
    };
    

    //////////////////////////// Fin Funcion Guardar //////////////////
