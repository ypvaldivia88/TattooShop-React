import React, { Component } from 'react';

export default class CreateArtista extends Component {
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form>
                    <div className="form-group">
                        <label>Nombre del Artista:  </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Guardar Artista" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}