
const {body, validationResult, query } = require ('express-validator');
const Proveedor = require('../modelos/ModeloProveedores');
const Telefono = require('../modelos/ModeloTelefonoProveedores');
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
            ruta:"api/proveedores/listar2",
            metodo:"get",
            parametros:"",
            descripcion: "Lista todos los Proveedores"
          },
          {
            ruta:"api/proveedores/guardar",
            metodo:"post",
            parametros:{
              nombre: "Nombre de proveedor. Obligatorio",
              rtn: "RTN de el proveedor. ",
              correo: "Correo del proveedor. ",

            },
            descripcion: "Guardar todos los datos de los Proveedores"
          },
          {
            ruta:"api/proveedores/eliminar",
            metodo:"delete",
            parametros:{
              id: "id  de proveedor. Obligatorio",
             
            },
            descripcion: "Eliminar un proveedor existente"

          },
        ],
      }

  ];
  const datos = {
    api: "API-PROYECTO GRUPO 5",
    descripcion: "Interfaz de progamación de compras",
    modulo: "Proveedores",
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
exports.Listar = async (req,res)=>{   //Esta es listar 
  var msj = {
    mensaje: '' 
  }
  try{

    const lista = await ModeloProveedores.findAll(); 
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



    //////////////////////////// Fin Funcion Guardar //////////////////

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
                  await ModeloProveedores.create({
                    nombre: nombre,
  
                  });
              } else {
                 await ModeloProveedores.create({
                   nombre: nombre,
                     rtn: rtn
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


/////////////////////////// Buscar /////////////////////////////////////////////
  exports.BuscarFiltro = async (req, res)=>{
    var msj = validacion(req);
    const { id } = req.query;
    if (msj.errores.length > 0){
        msjRes(res, 200, msj);
    }
    else{
        const filtro = '%' + req.query.filtro + '%';
        const limite = req.query.limite;
        try {
            const lista = await Proveedor.findAll({
                include: {
                    model: Telefono,
                    attributes:['telefono'],
                },
                where:{
                    [Op.or]:[
                        {npmbre: {[Op.like]: filtro}},
                        {rtn: {[Op.like]: filtro}}
                       // {apellido: {[Op.like]: filtro}}
                    ]
                },
                limit: 10,
            });
            if (lista.length==0){
                msj.estado = 'precaucion';
                msj.mensaje = 'La peticion se ejecuto correctamente';
                msj.errores={
                    mensaje: 'No existe ningun empleado con esta informacion',
                    parametro: 'filtro',
                };
            }
            else{
                console.log(JSON.stringify(lista, null, ' '));
                msj.datos= lista;
            }
            msjRes(res, 200, msj);
        } catch (error) {
            console.error(error);
            msj.estado = 'error';
            msj.mensaje = 'La peticion no se ejecuto';
            msj.errores = error;
            msjRes(res, 500, msj);
        }
    }        
};

///////////////////////// Fin Buscar  ///////////////////////////