import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses'
import CartasImagenes from './cartasImagenes'
const NUMERO_CARTAS = 20;

export default () => {
    //const fontAwesomeClasses = FontAwesomeClasses();
    const cartasImagenes = CartasImagenes();
    let cartas = [];

    while(cartas.length<NUMERO_CARTAS){
        //Numero aleatorio para saber el icono
        //const indice = Math.floor(Math.random() * fontAwesomeClasses.length);
        const indice = Math.floor(Math.random() * cartasImagenes.length);
        const carta = {
            //icono: fontAwesomeClasses.splice(indice, 1)[0],
            icono: cartasImagenes.splice(indice, 1)[0],
            fueAdivinada: false
        };

        cartas.push(carta);
        cartas.push({...carta});
    }

    return shuffle(cartas);
};