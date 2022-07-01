
const {body, validationResult, query } = require ('express-validator');
//const Proveedores = require('../modelos/ModeloProveedores');
const ModeloProveedores = require('../modelos/ModeloProveedores'); 

const  Provee = require('../modelos/ModeloProveedores'); 
const  Rt = require('../modelos/ModeloProveedores'); 


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
  exports.Guardar = async (req, res) => {
    const validaciones = validationResult(req);

    
        const {nombre, rtn, direccion, fechahora, correo} = req.body;
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
                    const buscarNombre = Provee.findOne({ //que busque uno
                        where:{
                            nombre:nombre
                        }
                    });
                    if(buscarNombre){  //validacion que ya existe 
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
                
               // } 
        
                //} 

//>>

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
                       fechahora: fechahora,
                       correo: correo
                     
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
