function moverNave(){
	var limite_ancho = canvas.width - nave.width;
	var limite_alto = canvas.height - nave.height;
	var velocidad_mov = 20;

	if(teclado[37]){
		//Movimiento a la izquierda del objeto
		nave.x -= velocidad_mov;
		if(nave.x < 0)
			nave.x = 0;
	}

	if(teclado[38]){
		//Movimiento hacia arriba del objeto
		nave.y -= velocidad_mov;
		if(nave.y < 0)
			nave.y = 0;
	}

	if(teclado[39]){
		//Movimiento a la derecha del objeto
		nave.x += velocidad_mov;
		if(nave.x > limite_ancho)
			nave.x = limite_ancho;
	}

	if(teclado[40]){
		//Movimiento hacia abajo del objeto
		nave.y += velocidad_mov;
		if(nave.y > limite_alto)
			nave.y = limite_alto;
	}

	//Tecla de disparo hacia arriba
	if(teclado[87]){
		if(!disparando)
		{
			if(personaje == 'p5')
			{
				fuego("arriba_iz");
				fuego("arriba_dr");
			}
			fuego("arriba");
			disparando = true;
		}
		console.log(personaje);
		if(personaje == 'p1')
			fuego("arriba");
	}
	else
		disparando = false;

	if(personaje == 'p6')
	{
		//Tecla de disparo hacia abajo
		if(teclado[83]){
			if(!disparando_abajo)
			{
				fuego("abajo");
				disparando_abajo = true;
			}
		}
		else
			disparando_abajo = false;

		//Tecla de disparo hacia la izquierda
		if(teclado[65]){
			if(!disparando_izq)
			{
				fuego("izquierda");
				disparando_izq = true;
			}
		}
		else
			disparando_izq = false;
		
		//Tecla de disparo hacia la derecha
		if(teclado[68]){
			if(!disparando_der)
			{
				fuego("derecha");
				disparando_der = true;
			}
		}
		else
			disparando_der = false;
	}

	//Tecla de teletransporte Q

	if(teclado[81] && personaje == 'p2')
	{
		if(!teletransporte)
		{
			nave.x = aleatorio(10,980);
			nave.y = aleatorio(10,580);
			teletransporte = true;
		}
	}
	else
		teletransporte = false;

	if(nave.estado == 'golpeado'){
		nave.contador++;
		if(nave.contador >=20){
			nave.contador = 0;
			nave.estado = 'muerto';
			juego.estado = 'perdido';
			textoRespuesta.titulo = 'Has perdido';
			textoRespuesta.subtitulo = 'Pulsa ENTER para reiniciar...';
			textoRespuesta.contador = 0;
			//nivel = 1;
		}
	}
}

// Funcion para mover los disparos dependiendo de la 
// direccion desde la que se lanzan
function moverDisparos(){
	
	for(var i in disparos){
		var disparo = disparos[i];
		if(disparo.direccion == "abajo"){
			disparo.y += 2;
		}
		else if(disparo.direccion == "izquierda")
		{
			disparo.x -= 2;
		}
		else if(disparo.direccion == "derecha")
		{
			disparo.x += 2;
		}
		else if(disparo.direccion == "arriba_iz")
		{
			disparo.y -= 2;
			disparo.x--;

		}
		else if(disparo.direccion == "arriba_dr")
		{
			disparo.y -= 2;
			disparo.x++;
		}
		else
			disparo.y -= 2;
	}

	// Funciones para limpiar los disparos cuando se acercan al limite
	// del canvas.
	disparos = disparos.filter(function(disparo){
		return disparo.y > 0;
	});

	disparos = disparos.filter(function(disparo){
		return disparo.x > 0;
	});

	disparos = disparos.filter(function(disparo){
		return disparo.y < canvas.height - 10;
	});

	disparos = disparos.filter(function(disparo){
		return disparo.x < canvas.width - 10;
	});

	if(juego.estado == 'perdido')
	{
		disparos = disparos.filter(function(disparo){
		return false;
		});
		disparosEnemigos = disparosEnemigos.filter(function(disparo){
		return false;
		});
		enemigos = enemigos.filter(function(disparo){
		return false;
		});
	}


}

function moverDisparosEnemigos(){
	for(var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		
		disparo.y += 3;

		if(nivel == 5){
			disparo.y += 2;
			if(contador_jefe>5000)
				disparo.x += 3;
			if(contador_jefe>6000)
				disparo.x -= 3;
			if(contador_jefe>8000)
				disparo.x -= 2;
		}
	}
	disparosEnemigos = disparosEnemigos.filter(function(disparo){
		return disparo.y < canvas.height;
	});
}