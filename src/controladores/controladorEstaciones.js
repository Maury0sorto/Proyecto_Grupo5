const {body, validationResult, query } = require ('express-validator');
const ModeloEstaciones = require('../modelos/ModeloEstaciones');
const Estaciones = require('../modelos/ModeloEstaciones');
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
          modulo: "Estaciones", 
          rutas:[
            {
              ruta:"api/estaciones",
              metodo:"get",
              parametros:"",
              descripcion: "Inicio del módulo de Estaciones"
            },
            {
              ruta:"api/estaciones/listar2",
              metodo:"get",
              parametros:"",
              descripcion: "Lista todos las Estaciones"
            },
            {
              ruta:"api/estaciones/guardar",
              metodo:"post",
              parametros:{
                nombre: "Nombre de estacion. Obligatorio",
                
  
              },
              descripcion: "Guardar todos los datos de las Estaciones"
            },
            {
              ruta:"api/estaciones/eliminar",
              metodo:"delete",
              parametros:{
                NumeroEstacion: "Numero de estacion. Obligatorio",
               
              },
              descripcion: "Eliminar una Estacion  existente"
  
            },
          ],
        }
  
    ];
    const datos = {
      api: "API-PROYECTO GRUPO 5",
      descripcion: "Interfaz de progamación de compras",
      modulo: "Estaciones",
      propiedad: "Grupo5",
      desarrollador: "Mauricio Zavala Osorto",
      colaboradores: "",
      fecha: "28/08/2001",
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
  
      const lista = await ModeloEstaciones.findAll(); 
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


    exports.Guardar = async(req, res) => {
        const validaciones = validationResult(req);
        console.log(validaciones.errors[0]);
        console.log(req.body);
        const { nombre, rtn } = req.body;
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
                if (!nombre) {
                    await ModeloEstaciones.create({
                      nombre: nombre,
    
                    });
                } else {
                   await ModeloEstaciones.create({
                     nombre: nombre
                       //Rtn: rtn
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

    //////////////////////////////////////////////////////////////////////////////////////////////


    exports.Eliminar = async (req, res) =>{
      var msj = validacion(req);
      if (msj.errores.length > 0){
          msjRes(res, 200, msj);
      }
      else{
          try {
              const { id } = req.query;
              var buscarEstacion = await Estaciones.findOne({
                  where:{
                    NumeroEstacion: NumeroEstacion
                  }
              });
              if(!buscarEstacion){
                  msj.estado = 'precaucion';
                  msj.mensaje = 'La peticion se ejecuto correctamente';
                  msj.errores={
                      mensaje: 'El NumeroEstacion de la estacion  no existe',
                      parametro: 'NumeroEstacion',
                  };
              }
              else{
                  await Estaciones.destroy({
                      where: {
                        NumeroEstacion: NumeroEstacion
                      }
                  });
              }
              msjRes(res, 200, msj);
          } catch (error) {
              msj.estado = 'error';
              msj.mensaje = 'La peticion no se ejecuto';
              msj.errores = error;
              msjRes(res, 500, msj);
          }
      }
  };