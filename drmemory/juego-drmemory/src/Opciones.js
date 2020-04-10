import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import './Opciones.css';

export default class Header extends Component{
    render(){
        return(
                <div className="opciones" onClick={this.props.resetearPartida}>
                    <Button className="boton-reiniciar" variant="contained" color="primary">
                        Reiniciar
                    </Button>
                </div>
        );
    }
}