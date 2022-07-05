const express = require('express');
const morgan = require('morgan');
const myconn = require('express-myconnection') ;
const mysql = require('mysql2')
//const path = require('path');
require('dotenv').config();

const app = express();  
app.set('port',4306); 
app.use(morgan('dev'));  


app.use(express.urlencoded({extended: false}));    
app.use(express.json());


/////////////////////////////////////////////////////////////
const dbOptions = {
    host: 'localhost',
    port: 3306,   //puerto que esta utulizando la base
    user: 'root',  //usuario
    password: '123456', //contrasenna
    database: 'compras'   //nombre de pase
}

app.use(myconn(mysql, dbOptions, 'single'))

/////////////////////////////////////////////////////////////

app.use('/api/', require('./rutas'));   
app.use('/api/prueba', require('./rutas/index'));  
app.use('/api/proveedores',require('./rutas/RutasProveedores'))
app.use('/api/telefono', require('./rutas/RutasTelefonoProveedores')); 
app.use('/api/compras', require('./rutas/RutasCompras'));  
app.use('/api/estaciones', require('./rutas/RutasEstaciones')); 
app.use('/api/usuarios', require('./rutas/RutasUsuario')); 

app.use('/api/detallecompra', require('./rutas/RutasDetalleCompra'));     



app.listen(app.get('port'), () => {  
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
    
});

