/** FUNCIONES DE DIBUJADO **/

function dibujarFondo(){

	ctx.drawImage(fondo,0,0,1000,500);
}

function actualizarImgNave(ruta){
	img_avatar_p1 = ruta;
}

function modoPersonaje(person){
	personaje = person;
}

function dibujarNave(){
	ctx.save(); //Guardamos la info actual del ctx
	avatar = new Image();
	avatar.src = img_avatar_p1;
	ctx.drawImage(avatar,nave.x,nave.y,nave.width,nave.height);
	ctx.restore();
}

function dibujarNave2(){
	ctx.save(); //Guardamos la info actual del ctx
	avatar2 = new Image();
	avatar2.src = img_avatar_p2;
	ctx.drawImage(avatar2,nave2.x,nave2.y,nave2.width,nave2.height);
	ctx.restore();
}

// Funcion para dibujar disparos

function dibujarDisparos(){
	ctx.save();
	//ctx.fillStyle = 'black';
	imgDisparo = new Image();
	imgDisparo.src = "imagenes/disparo.png";
	for(var i in disparos){
		var disparo = disparos[i];
		ctx.drawImage(imgDisparo,disparo.x,disparo.y,disparo.width,disparo.height);
	}
	ctx.restore();
}

function dibujarDisparos2(){
	ctx.save();
	imgDisparo = new Image();
	imgDisparo.src = "imagenes/disparo.png";
	for(var i in disparos2){
		var disparo2 = disparos2[i];
		ctx.drawImage(imgDisparo,disparo2.x,disparo2.y,disparo2.width,disparo2.height);
	}
	ctx.restore();
}


//Funcion para dibujar enemigos

function dibujarEnemigos(){
	for(var i in enemigos){
		var enemigo = enemigos[i];
		ctx.save();
		imgEnemigo = new Image();
		imgEnemigo.src = "imagenes/en.png";
		imgEnemigoMuerto = new Image();
		imgEnemigoMuerto.src = "imagenes/en_muerto.png";
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
		ctx.fillStyle = 'black';
		ctx.font = 'Bold 40pt Raider';
		ctx.fillText(textoRespuesta.titulo,canvas.width/2-120,100);
		ctx.font = '30pt Art';
		ctx.fillText(textoRespuesta.subtitulo,canvas.width/2-120,135);
	}
	if(juego.estado == 'victoria' || juego.estado == 'comenzar'){
		ctx.fillStyle = 'black';
		ctx.font = 'Bold 40pt Raider';
		ctx.fillText(textoRespuesta.titulo,canvas.width/2-200,100);
		ctx.font = '30pt Art';
		ctx.fillText(textoRespuesta.subtitulo,canvas.width/2-170,135);
	}
	ctx.restore();
}