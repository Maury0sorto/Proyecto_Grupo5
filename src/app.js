const express = require('express');
const morgan = require('morgan');
//const path = require('path');
require('dotenv').config();

const app = express();  
app.set('port',4306); 
app.use(morgan('dev'));  


app.use(express.urlencoded({extended: false}));    
app.use(express.json());


app.use('/api/', require('./rutas'));   
app.use('/api/', require('./rutas/index'));
app.use('/api/proveedores', require('./rutas/RutasProveedores'));     
app.use('/api/telefono', require('./rutas/RutasTelefonoProveedores'));     
app.use('/api/detallecompra', require('./rutas/RutasDetalleCompra'));     



app.listen(app.get('port'), () => {  
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
    
});

