const express = require('express');
const morgan = require('morgan');
//const path = require('path');
require('dotenv').config();

const app = express();  
app.set('port',4306); 
app.use(morgan('dev'));  


app.use(express.urlencoded({extended: false}));    
app.use(express.json());


app.use('/api/', require('C:/Users/Oscar/Documents/GitHub/Proyecto_Grupo5/src/rutas'));      
app.use('/api/', require('C:/Users/Oscar/Documents/GitHub/Proyecto_Grupo5/src/rutas/index'));

app.use('/api/proveedores', require('C:/Users/Oscar/Documents/GitHub/Proyecto_Grupo5/src/rutas/RutasProveedores'));     
app.use('/api/telefono', require('C:/Users/Oscar/Documents/GitHub/Proyecto_Grupo5/src/rutas/RutasTelefonoProveedores'));     
app.use('/api/detallecompra', require('C:/Users/Oscar/Documents/GitHub/Proyecto_Grupo5/src/rutas/RutasDetalleCompra'));     



app.listen(app.get('port'), () => {  
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
    
});

