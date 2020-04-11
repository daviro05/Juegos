const express = require('express');

// inicialización de express
const app = express();


// configuración

app.set('port', process.env.PORT || 3000);


// static files

app.use(express.static('public'))

// iniciando el server

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 3000')
});

