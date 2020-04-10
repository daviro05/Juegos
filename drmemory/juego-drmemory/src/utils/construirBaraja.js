import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses'
const NUMERO_CARTAS = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cartas = [];

    while(cartas.length<NUMERO_CARTAS){
        //Numero aleatorio para saber el icono
        const indice = Math.floor(Math.random() * fontAwesomeClasses.length);
        const carta = {
            icono: fontAwesomeClasses.splice(indice, 1)[0],
            fueAdivinada: false
        };

        cartas.push(carta);
        cartas.push({...carta});
    }

    return shuffle(cartas);
};