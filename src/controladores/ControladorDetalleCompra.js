const {body, validationResult, query } = require ('express-validator');
const ModeloDetalleCompras = require('../modelos/ModeloDetalleCompras'); 


///////////////////// Funcion listar /////////////////////////////
exports.Listar = async (req,res)=>{  
  var msj = {
    mensaje: '' 
  }
  try{

    const lista = await ModeloDetalleCompras.findAll(); 
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