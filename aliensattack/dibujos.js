/** FUNCIONES DE DIBUJADO **/

function dibujarFondo(){

	ctx.drawImage(fondo,0,0);
}

function actualizarImgNave(ruta){
	img_avatar = ruta;
}

function modoPersonaje(person){
	personaje = person;
}

function dibujarNave(){
	ctx.save(); //Guardamos la info actual del ctx
	avatar = new Image();
	avatar.src = img_avatar;
	ctx.drawImage(avatar,nave.x,nave.y,nave.width,nave.height);
	ctx.restore();
}

// Funcion para dibujar disparos

function dibujarDisparos(){
	ctx.save();
	//ctx.fillStyle = 'black';
	imgDisparo = new Image();
	if(personaje == 'p8')
		imgDisparo.src = "imagenes/disparos/disparo8.png";
	else
		imgDisparo.src = "imagenes/disparo.png";
	for(var i in disparos){
		var disparo = disparos[i];
		ctx.drawImage(imgDisparo,disparo.x,disparo.y,disparo.width,disparo.height);
	}
	ctx.restore();
}

//Funcion para dibujar enemigos

function dibujarEnemigos(){
	for(var i in enemigos){
		var enemigo = enemigos[i];
		ctx.save();
		imgEnemigo = new Image();
		imgEnemigo.src = "imagenes/enemigo.png";
		imgEnemigoMuerto = new Image();
		imgEnemigoMuerto.src = "imagenes/enemigo_muerto.png";
		if(enemigo.estado == 'vivo') ctx.drawImage(imgEnemigo,enemigo.x,enemigo.y,enemigo.width,enemigo.height);
		if(enemigo.estado == 'golpeado') ctx.drawImage(imgEnemigoMuerto,enemigo.x,enemigo.y,enemigo.width,enemigo.height);
	}
}

// Funcion para dibujar disparos de los enemigos

function dibujarDisparosEnemigos(){
	for(var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		ctx.save();
		imgDisparoE = new Image();
		imgDisparoE.src = "imagenes/disparo_e.png";
		ctx.drawImage(imgDisparoE,disparo.x,disparo.y,disparo.width+10,disparo.height+10);
		ctx.restore();
	}
}

// Funcion que dibuja el texo al finalizar la partida. Cuando se pierde y cuando se acaba el juego.

function dibujaTexto(){
	if(textoRespuesta.contador == -1) return;
	var alpha = textoRespuesta.contador/50.0;
	if(alpha>1){
		for(var i in enemigos){
			delete enemigos[i];
		}
	}
	ctx.save();
	ctx.globalAlpha = alpha;
	if(juego.estado == 'perdido' || juego.estado == 'finalizado'){
		ctx.fillStyle = 'white';
		ctx.font = 'Bold 40pt Arial';
		ctx.fillText(textoRespuesta.titulo,140,200);
		ctx.font = '14pt Arial';
		ctx.fillText(textoRespuesta.subtitulo,190,250);
	}
	if(juego.estado == 'victoria' || juego.estado == 'comenzar'){
		ctx.fillStyle = 'white';
		ctx.font = 'Bold 40pt Arial';
		ctx.fillText(textoRespuesta.titulo,140,200);
		ctx.font = '14pt Arial';
		ctx.fillText(textoRespuesta.subtitulo,190,250);
	}
	ctx.restore();
}