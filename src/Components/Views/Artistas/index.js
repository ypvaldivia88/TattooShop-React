import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class Artistas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artistas: [],
            nombre: ''
        }
    }

    componentDidMount() {
        this.getArtistas();
    }

    getArtistas = _ => {
        axios.get('/artistas')
            .then(res => {
                this.setState({ artistas: res.data });
            })
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

    updateArtista = id => {
        axios.put('/artistas/:id', { id })
        this.getArtistas();
    }

    deleteArtista = id => {
        axios.delete(`/artistas/${id}`)
            .then(this.getArtistas())
            .catch(err => console.error(err))
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
                                    name="nombre"
                                    placeholder="Nombre"
                                    onChange={this.handleNombre} />
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
                                    <tr key={a.id}>
                                        <Fragment>
                                            <td>{a.id}</td>
                                            <td>{a.nombre}</td>
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