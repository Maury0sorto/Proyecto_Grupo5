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
