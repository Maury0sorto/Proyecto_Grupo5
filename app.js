const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();  //la api usaa expess
app.set('port',3001); //para definir que puerto usaremo
app.use(morgan('dev'));  //ojo on el dev


app.use(express.urlencoded({extended: false}));    // que los url no esten coificados
app.use(express.json());


app.use('/api/', require('./rutas'));      
app.use('/api/', require('./rutas/index'));


app.listen(app.get('port'), () => {  //llamada la variable
    console.log('Servidor iniciado en el puerto ' + app.get('port')); // imprime aca  la variable del servidor
    
}); //npm run dev para correr la app  //control c para detenern  // es RUN DEV porque se ccambiar el scrib en debug en packet json 

// manualmente se ejecuta con node src/app.js