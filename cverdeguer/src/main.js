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
    //alert(encriptado);

    switch(encriptado){

        case "QU1BWklORw==":
        case "TklDRQ==":
                document.getElementById("mapa").innerHTML = "<br><a href='#' target='_blank'><img class='mtesoro' src='../img/correcto.png'></a>";
        break;

        case "Q09STkFNVVNB":
                document.getElementById("mapa").innerHTML = "<br><a href='#' target='_blank'><img class='mtesoro' src='../img/correcto.png'></a>";
        break;

        case "MTIzLTQ1LTY3Kzg5PTEwMA==":
                        window.location.href = "./enigma_arbol.html";
        break;

        case "U0VNUElURVJOTw==":
                window.location.href = "./index.html";
        break;

        default:
             document.getElementById("mapa").innerHTML = "<br><a href='#' target='_blank'><img class='mtesoro' src='../img/incorrecto.png'></a>";
    }
}

function irA(lugar){
        window.location.href = "./"+lugar+".html";
}