import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class Artistas extends Component {

    state = {
        artistas: [],
        seleccionado: 0,
        Nombre: ''
    }

    componentDidMount() {
        this.getArtistas();
    }

    getArtistas = _ => {
        axios.get('/artistas')
            .then(res => {
                const artistas = res.data;
                this.setState({ artistas });
            })
    }

    handleChange = event => {
        this.setState({ Nombre: event.target.value });
    }

    addArtista = event => {
        event.preventDefault();

        const nombre = this.state.Nombre;

        axios.post('/artistas', { nombre })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    updateArtista = id => {
        axios.put('/artistas/:id', { id })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    deleteArtista = id => {
        axios.delete('/artistas/:id', {
            data: { id }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const { artistas } = this.state;
        return (
            <Fragment>
                <h1>Artistas</h1>
                <div className="card">
                    <div className="card-header">
                        <form className="form-inline float-right" onSubmit={this.addArtista}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Nombre"
                                    placeholder="Nombre"
                                    onChange={this.handleChange} />
                            </div>
                            <button type="button" className="btn btn-info ml-2">
                                <i className="fa fa-search"></i>
                            </button>
                            <button type="submit" className="btn btn-success ml-2">
                                <i className="fa fa-plus"></i>
                            </button>
                        </form>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {artistas.map(a =>
                                    <tr>
                                        <Fragment>
                                            <td>{a.id}</td>
                                            <td>{a.Nombre}</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm mr-1" onClick={this.updateArtista(a.id)}>
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button className="btn btn-danger btn-sm" onClick={this.deleteArtista(a.id)}>
                                                    <i className="fa fa-eraser"></i>
                                                </button>
                                            </td>
                                        </Fragment>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        );
    }

}