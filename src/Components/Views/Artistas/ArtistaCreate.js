import React, { Component } from 'react';
import axios from 'axios';

export default class ArtistaCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: ''
        }
    }

    handleNombre = event => {
        this.setState({ nombre: event.target.value });
    }

    addArtista = _ => {
        const { nombre } = this.state;
        axios.post('/artistas', { nombre })
            .then(this.getArtistas())
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Agregar nuevo Artista</h3>
                <form>
                    <div className="form-group">
                        <label>Nombre del Artista:  </label>
                        <input type="text" className="form-control" onChange={this.handleNombre()} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Guardar Artista" className="btn btn-primary" onSubmit={this.addArtista()} />
                    </div>
                </form>
            </div>
        )
    }
}