import React, { Component } from 'react';
import './Carta.css';
import FlipCard from 'react-card-flip';


function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

export default class Carta extends Component {
    render() {
        return (
            <div className="carta" onClick={this.props.seleccionarCarta}>
                <FlipCard
                isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                disabled={true}
                >
                    <div className="portada"></div>
                    <div className="contenido">
                        <img src={images[this.props.icono]}></img>
                    </div>
                </FlipCard>
            </div>
        )
    }
}
