//Variable que guarda el nivel actual
var nivel_act;

var vida;

var intervalo = window.setInterval(bucle,1000/55);

var puntos_actuales;

function cambiarPersonaje(personaje){

	var x = document.getElementById(personaje).getAttribute("src");
	modoPersonaje(personaje);
	actualizarImgNave(x);
}
function mostrarInformacion(){
	nivel_act = nivelActual();
	document.getElementById('nivel').innerHTML = "Nivel "+nivel_act;
	puntos_actuales = obtenerPuntos();
	document.getElementById('puntos').innerHTML = "Puntos "+puntos_actuales;
	if(nivel_act == 5){
		vida = vidaEnemigo();
		if(vida <= 10000)
		document.getElementById('vida_jefe').innerHTML = 10000-vida + " / 10000";
	}
	else
		document.getElementById('vida_jefe').innerHTML ="";
}

function guardarPuntuacion(){
	//console.log('entra');
	//Mediante esta funcion enviamos los datos a la funcion de php de guardar.php
    var person = prompt("Introduce tu nombre", "");

    if(person!=null)
	{
		var puntos = obtenerPuntos();
	    $.ajax({
	       url: "guardar.php",
	       type: "post",
	       data: {"persona" : "<li><span class=nombre_jugador>"+person+"</span>", "puntos" :"<span class=puntosp>"+puntos+"</span></li>"},
	       	       success: function(data){
	       	           //$("#puntuaciones").text(data);'
	       }
	    });
	}
}

function leerPuntuacion(){

    $.ajax({
       url: "leer.php",
       type: "post",
       data: "data",
       success: function(data){
           $("#puntuaciones").html(data);
       }
    });
}

function crearPersonaje(){
	$.ajax({
	       url: "subir.php",
	       type: "post",
	       data: "",
	       	     success: function(data){
	       }
	    });

}

function bucle()
{
	mostrarInformacion();
}