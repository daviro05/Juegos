*NOTAS*

### Crear config básica para un proyecto en nodejs.

> npm init --yes

### Instalaremos el modulo express para entregar la interfaz principal.

> npm i express socket.io

### Lo instalaremos junto con un módulo que se denomina socket.io

Nos permiotirá mantener la conexion.

public irá el Front.

### Modulo para poder escribir y tener un entorno más fluido.
Reiniciará el servidor por nosotros.

> npm i nodemon -D


### El el package.json cambiamos lo siguiente:

  "scripts": {
    "dev": "nodemon src/index.js"
  },

### Y para probarlo haremos:

> npm run dev

### Para especificar donde está la carpeta public, es decir, todo el contenido del front. Lo haremos con express

### Usaremos un modulo llamado path para decirle donde está la carpeta public.

app.use(express.static(path.join(__dirname,'public')));
