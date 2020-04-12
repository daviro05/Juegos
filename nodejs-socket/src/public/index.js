function init(){
    // Aquí se ejecutarán todos los eventos que vayamos a tener

    let mouse = {
        click: false,
        move: false,
        pos: {x: 0, y: 0},
        pos_prev: false
    };
    
    // Vamos a inicializar el canvas

    const canvas = document.getElementById('drawing');
    const context = canvas.getContext('2D');

    // Vamos a establecer el alto y ancho del canvas

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
}

document.addEventListener('DOMContentLoaded', init)