function pulsar(e) {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            comprobarCodigo();
        }
}

function comprobarCodigo() {

    let codigo = document.querySelector('#codigo_secreto').value;
    codigo = codigo.toUpperCase();

    var encriptado = btoa(codigo);
    alert(encriptado);

    switch(encriptado){

        case "QU1BWklORw==": //amazing
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./img/270919951992.jpg' target='_blank'><img class='mtesoro' src='img/mapa.png'></a>";
        break;

        case "Q09STkFNVVNB": //cornamusa
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./img/10141018AST.jpg' target='_blank'><img class='mtesoro' src='img/mapa.png'></a>";
        break;

        default:
             document.getElementById("mapa").innerHTML = "<p class='incorrecto'>¡CÓDIGO INCORRECTO!</p><br><a href='./img/intentalo.jpg' target='_blank'><img class='mtesoro' src='img/intentalo.jpg'></a>";
    }
}

function irA(lugar){
        window.location.href = "./"+lugar+".html";
}