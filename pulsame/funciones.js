function guardarPuntuacion(){
	console.log('entra');
	//Mediante esta funcion enviamos los datos a la funcion de php de guardar.php
    //var person = prompt("Nombre", "");

		var record = getRecord();
	    $.ajax({
	       url: "guardar.php",
	       type: "post",
	       data: {"puntos" :record},
	       	       success: function(data){
	       }
	    });
}

function leerPuntuacion(){

    $.ajax({
       url: "leer.php",
       type: "post",
       data: "data",
       success: function(data){
           $("#puntuaciones").html(data);
           record = data;
       }
    });
}