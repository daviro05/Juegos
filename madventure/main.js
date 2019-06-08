function comprobarCodigo() {

    let codigo = document.querySelector('#codigo_tesoro').value;
    codigo = codigo.toUpperCase();

    switch(codigo){

        case "270919951992":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./img/270919951992.jpg' target='_blank'><img class='mtesoro' src='img/mapa.png'></a>";
        break;

        case "10141018AST":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./img/10141018AST.jpg' target='_blank'><img class='mtesoro' src='img/mapa.png'></a>";
        break;

        case "110519TEAMO":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./img/110519TEAMO.jpg' target='_blank'><img class='mtesoro' src='img/mapa.png'></a>";
        break;

        case "T319072019QU13R0":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./img/T319072019QU13R0.jpg' target='_blank'><img class='mtesoro' src='img/mapa.png'></a>";
        break;

        case "M4DR1DT0C4NCUN19":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./img/M4DR1DT0C4NCUN19.jpg' target='_blank'><img class='mtesoro' src='img/mapa.png'></a>";
        break;

        case "JULM4DR1DT0C4NCUN19":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./capitulos/Capitulo4.pdf' target='_blank'><img class='mtesoro' src='img/mapa2.png'></a>";
        break;

        case "NEZAHUALCOYOTL":
        case "NEZAHUALCÓYOTL":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./pistas/nezahualcoyotl.jpg' target='_blank'><img class='mtesoro' src='img/pista.png'></a>";
        break;

        case "28041402":
                document.getElementById("mapa").innerHTML = "<p class='correcto'>¡CÓDIGO CORRECTO!<p><br><a href='./pistas/Lipo.jpg' target='_blank'><img class='mtesoro' src='img/pista.png'></a>";
        break;

        default:
             document.getElementById("mapa").innerHTML = "<p class='incorrecto'>¡CÓDIGO INCORRECTO!</p><br><a href='./img/intentalo.jpg' target='_blank'><img class='mtesoro' src='img/intentalo.jpg'></a>";
    }
}

function verCapitulos(){
        window.location.href = "./capitulos.html";
}