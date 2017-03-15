//Objetos importates de canvas

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var ancho_nave = 70;
var alto_nave = 70;

//Crear objeto de la nave con JSON
var nave = {
	x:canvas.width-1000,
	y:canvas.height-70, //Para que se situe abajo de nuestro cuadro canvas
	width:ancho_nave,
	height:alto_nave,
	contador:0
}

var nave2 = {
	x:canvas.width-70,
	y:canvas.height-70, //Para que se situe abajo de nuestro cuadro canvas
	width:ancho_nave,
	height:alto_nave,
	contador:0
}

//Variable para empezar el juego
var empieza = false;

//Variable para pruebas
var modo_pruebas = false;

// Objeto juego, estado actual: esperando, iniciando, jugando, perdido, finalizado.

var juego = {
	estado: 'esperando'
};

//Objeto para el texto

var textoRespuesta = {
	contador: -1,
	titulo: '',
	subtitulo: ''
}

//Definimos eventos de teclado

var teclado = {}

//Array para armamento

var disparos = [];
var disparos2 = [];
var disparosEnemigos = [];

//Array para los enemigos

var enemigos = [];
var num_enemigos = 20;

//Variable para el personaje y sus disntintos modos
var personaje = 'p1';

var puntos_totales = 0;
var puntos_salvados = 0;
var muertes = 0;
//Definir vars para las imagenes

var fondo, avatar, avatar2, imgEnemigo, imgEnemigoMuerto, imgDisparo, imgDisparoE;
var preloader;
var img_avatar_p1 = "imagenes/avatares/p1.png";
var img_avatar_p2 = "imagenes/avatares/p2.png";
var img_avatar_p3 = "imagenes/avatares/p3.png";
var img_avatar_p4 = "imagenes/avatares/p4.png";

//Variable que indica el nivel actual
var nivel = 1;
var ultimo_nivel = 5;
var cambio = 0;
var contador_jefe=0;

//Definicion de funciones

function loadMedia(){
	fondo = new Image();
	fondo.src = "imagenes/fondo.jpg";

	fondo.onload = function(){
		leerPuntuacion();
		var intervalo = window.setInterval(frameLoop,1000/55);
	}
}

function agregarEventosTeclado(){
	agregarEvento(document,"keydown",function(e){
		//Codigo que identifica la tecla que se ha presionado.
		//Se pone en true la tecla presionada.
		teclado[e.keyCode] = true;
		console.log(e.keyCode);
	});

	agregarEvento(document,"keyup",function(e){
		//Codigo que identifica la tecla que se ha presionado.
		//Se pone en false la tecla presionada.
		teclado[e.keyCode] = false;
	});

	function agregarEvento(elemento,nombreEvento,funcion){
		if(elemento.addEventListener){
			//navegadores tipo firefox, chrome.
			elemento.addEventListener(nombreEvento,funcion,false);
		}
		else if(elemento.attachEvent){
			//Navegador iexplorer
			elemento.attachEvent(nombreEvento,funcion);
		}
	}
}

function fuego(direccion){
	
	// atributos de disparo.
	disparos.push({
		x: nave.x + 35,
		y: nave.y + 50,
		width: 10,
		height: 10,
		direccion: direccion
	});
}

function fuego2(direccion){
	
	// atributos de disparo2.
	disparos2.push({
		x: nave2.x + 35,
		y: nave2.y + 50,
		width: 10,
		height: 10,
		direccion: direccion
	});
}

//Funcion para logica de colisiones.

function hit(a,b){
	var hit = false;
	if(b.x + b.width >= a.x && b.x < a.x + a.width){
		if(b.y + b.height >= a.y && b.y < a.y + a.height){
			hit = true;
		}
	}
	if(b.x <= a.x && b.x + b.width >= a.x + a.width){
		if(b.y <= a.y && b.y + b.height >= a.y + a.height){
			hit = true;
		}	
	}
	if(a.x <= b.x && a.x + a.width >= b.x + b.width){
		if(a.y <= b.y && a.y + a.height >= b.y + b.height){
			hit = true;
		}	
	}
	
	return hit;
}

// Funcion que actualiza los enemigos

function actualizaEnemigos(){
	if(!modo_pruebas){
		function agregarDisparos(enemigo,posicion_x,posicion_y){

			return {
				x: posicion_x,
				y: posicion_y,
				width: 5,
				height: 10,
				contador: 0
			}
		}
	}

	if(juego.estado == 'iniciando'){

		if(nivel == 4)
			num_enemigos = 12;
		else
			num_enemigos = 16;

		if(nivel == 5)
		{
			enemigos.push({
					x: 450,
					y: 10,
					height: 150,
					width: 150,
					estado: 'vivo',
					contador: 0,
					direccion: 'abajo'
			});

		}
		else
		{
			for(var i = 0;i<num_enemigos;i++){
				enemigos.push({
					x: 10 + (i*62),
					y: 10,
					height: 50,
					width: 50,
					estado: 'vivo',
					contador: 0,
					direccion: 'abajo'
				});
			}
		}
		juego.estado = 'jugando';
	}
	//Mover los enemigos
	for(var i in enemigos)
	{
			var enemigo = enemigos[i];
			if(!enemigo) continue;
			if(enemigo && enemigo.estado == 'vivo')
			{
				enemigo.contador++;

				//Condiciones para los diferentes niveles

				if(enemigos.length == 1 && nivel != ultimo_nivel)
					enemigo.x += Math.sin(enemigo.contador * Math.PI /90)*2;

				if(nivel == 2)
				{
					enemigo.y +=0.3;
					if(aleatorio(0,enemigos.length * 15) == 4){
						disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x,enemigo.y));
					}
				}
				else if(nivel == 3)
				{
					enemigo.y +=0.8;
					if(aleatorio(0,enemigos.length * 15) == 4){
						disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x,enemigo.y));
					}

				}
				else if(nivel == 4)
				{
					enemigo.y += Math.sin(enemigos.length * Math.PI /90);
					
					enemigo.x += Math.sin(enemigo.contador * Math.PI /90)*6;

					if(aleatorio(0,enemigos.length * 15) == 4){
						disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x,enemigo.y));
					}

				}
				else if(nivel == 5)
				{
					if(!modo_pruebas){

						if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x,enemigo.y));
						}
						if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x+100,enemigo.y));
						}
						if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x+200,enemigo.y));
						}
						if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x-100,enemigo.y));
						}
						if(contador_jefe > 1000){
							if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x+300,enemigo.y,'izquierda'));
							}
							if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x+400,enemigo.y,'izquierda'));
							}
						}
						if(contador_jefe > 2000){
							if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x-200,enemigo.y,'izquierda'));
							}
							if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x-400,enemigo.y,'izquierda'));
							}
						}
						if(contador_jefe > 9000){
							enemigo.x += Math.sin(enemigo.contador * Math.PI /90)*6;

							if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x-200,enemigo.y,'izquierda'));
							}
							if(aleatorio(0,enemigos.length * 30) == 4){
							disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x-400,enemigo.y,'izquierda'));
							}
						}
					}

				}
				else
				{
					if(aleatorio(0,enemigos.length * 20) == 4){
						disparosEnemigos.push(agregarDisparos(enemigo,enemigo.x,enemigo.y));
					}
				}
			}
			if(enemigo && enemigo.estado == 'golpeado')
			{
				enemigo.contador++;
				if(enemigo.contador >= 20){
					enemigo.estado = 'muerto';
					puntos_totales += 100;
					enemigo.contador = 0;
				}
			}
			if((enemigo.y > canvas.height-10)){
				juego.estado = 'perdido';
				nave.estado = 'golpeado';
			}
			//console.log(enemigo.y + " " + enemigo.x+ " nave: "+ nave.y + " "+nave.x);
			if(enemigo.y >= nave.y){

				juego.estado = 'perdido';
				nave.estado = 'golpeado';
			}

	}
	enemigos = enemigos.filter(function(enemigo){
		if(enemigo && enemigo.estado != 'muerto') return true;
		return false;
	});

}

function verificarContacto()
{
	for(var i in disparos){
		var disparo = disparos[i];
		for(var j in enemigos){
			var enemigo = enemigos[j];
			if(nivel == 5)
			{	
				if(hit(disparo,enemigo)){
					contador_jefe++;
					enemigo.estado = 'golpeado';
					enemigo.estado = 'vivo';
					puntos_totales += 1;
					console.log(contador_jefe);
				}
				if(contador_jefe >= 10000){
					enemigo.estado = 'golpeado';
					disparos = disparos.filter(function(disparo){
					return false;
					});
					disparosEnemigos = disparosEnemigos.filter(function(disparo){
					return false;
					});
					enemigo.contador = 0;
					contador_jefe = 10000;
				}
			}
			else
			{
				if(hit(disparo,enemigo)){
					enemigo.estado = 'golpeado';
					enemigo.contador = 0;
				}
			}
		}
	}

	for(var i in disparos2){
		var disparo = disparos2[i];
		for(var j in enemigos){
			var enemigo = enemigos[j];
			if(nivel == 5)
			{	
				if(hit(disparo,enemigo)){
					contador_jefe++;
					enemigo.estado = 'golpeado';
					enemigo.estado = 'vivo';
					puntos_totales += 1;
					console.log(contador_jefe);
				}
				if(contador_jefe >= 10000){
					enemigo.estado = 'golpeado';
					disparos2 = disparos2.filter(function(disparo){
					return false;
					});
					disparosEnemigos = disparosEnemigos.filter(function(disparo){
					return false;
					});
					enemigo.contador = 0;
					contador_jefe = 10000;
				}
			}
			else
			{
				if(hit(disparo,enemigo)){
					enemigo.estado = 'golpeado';
					enemigo.contador = 0;
				}
			}
		}
	}
	if(nave.estado == 'golpeado' || nave.estado == 'muerto') return;
	for(var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		if(hit(disparo,nave) || hit(disparo,nave2)){
			nave.estado = 'golpeado';
			nave2.estado = 'golpeado';
			muertes++;
			console.log("Muertes: "+muertes);
		}

	}


}


function actualizarEstadoJuego(){

	if(juego.estado == 'esperando'){
		textoRespuesta.titulo = 'ATACA-2';
		textoRespuesta.subtitulo = 'Pulsa ENTER para comenzar';
		textoRespuesta.contador = 0;
		juego.estado = 'finalizado';
	}

	if(juego.estado == 'jugando' && enemigos.length == 0){
		juego.estado = 'victoria';
		textoRespuesta.titulo = 'Nivel '+ nivel +' completado';
		textoRespuesta.subtitulo = 'No esta mal...';
		textoRespuesta.contador = 0;
		// Limpiamos los disparos al completar el nivel.
		disparosEnemigos = disparosEnemigos.filter(function(disparo){
		return false;
		});
		disparos = disparos.filter(function(disparo){
		return false;
		});
	}
	if(textoRespuesta.contador >= 0){
		textoRespuesta.contador++;
	}
	//Condicion para reiniciar el juego. Enter
	if((juego.estado == 'perdido' || juego.estado == 'victoria') && teclado[13]){
		
		puntos_totales = puntos_salvados;
		juego.estado = 'iniciando';
		nave.estado = 'vivo';
		textoRespuesta.contador = -1;
		contador_jefe = 0;
		//nivel = 1;
	}
	if(juego.estado == 'victoria' && nivel < ultimo_nivel){
		cambio++;
		if(cambio>=100)
			pasarNivel();
	}

	if(juego.estado == 'victoria' && nivel == ultimo_nivel){

		if(muertes == 0)
		puntos_totales += 1000;
		textoRespuesta.titulo = 'Juego completado';
		textoRespuesta.subtitulo = 'Pulsa ENTER para empezar de nuevo';
		textoRespuesta.contador = 0;
		disparosEnemigos = disparosEnemigos.filter(function(disparo){
		return false;
		});
		guardarPuntuacion();
		leerPuntuacion();
		juego.estado = 'finalizado';
	}

	if(juego.estado == 'finalizado' && teclado[13]){
		puntos_totales = 0;
		leerPuntuacion();
		juego.estado = 'iniciando';
		nave.estado = 'vivo';
		textoRespuesta.contador = -1;
		contador_jefe = 0;
		nivel = 1;
	}
	
}

function pasarNivel(){
	//puntos_totales += 100;
	puntos_salvados = puntos_totales;
	juego.estado = 'iniciando';
	nave.estado = 'vivo';
	textoRespuesta.contador = -1;
	cambio = 0;
	nivel++;
}

function nivelActual(){
	return nivel;
}

function vidaEnemigo(){
	return contador_jefe;
}

function obtenerPuntos(){
	return puntos_totales;
}

function muertesTotales(){
	return muertes;
}

function aleatorio(inferior,superior){
	var posibilidades = superior - inferior;
	var a = Math.random() * posibilidades;
	a = Math.floor(a);
	return parseInt(inferior) + a;
}


function frameLoop(){
	
		moverNave();
		moverNave2();
		actualizarEstadoJuego();
		actualizaEnemigos();
		moverDisparos();
		moverDisparos2();
		moverDisparosEnemigos();
		verificarContacto();
		dibujarFondo();
		dibujarEnemigos();
		dibujarDisparosEnemigos();
		dibujarDisparos();
		dibujarDisparos2();
		dibujaTexto();
		dibujarNave();
		dibujarNave2();
}


//Ejecucion de funciones
agregarEventosTeclado();
loadMedia();

