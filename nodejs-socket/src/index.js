const express = require('express');
const path = require('path');

// inicialización de express
const app = express();


// configuración

app.set('port', process.env.PORT || 3000);


// static files

app.use(express.static(path.join(__dirname,'public')));
//console.log(__dirname);

// iniciando el server

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 3000')
});

