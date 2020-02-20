import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class Citas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            citas: [],
            seleccionado: 0,
            nombre: ''
        }
    }

    componentDidMount() {
        this.getCitas();
    }

    getCitas = _ => {
        axios.get('/citas')
            .then(res => {
                this.setState({ citas: res.data });
            })
    }

    handleNombre = event => {
        this.setState({ nombre: event.target.value });
    }

    addCita = event => {
        event.preventDefault();
        const nombre = this.state.nombre;
        axios.post('/citas', { nombre })
    }

    updateCita = id => {
        axios.put('/citas/:id', { id })
    }

    deleteCita = id => {
        axios.delete('/citas/:id', {
            data: { id }
        })
    }

    render() {
        const { citas } = this.state;
        return (
            <Fragment>
                <h1>Citas</h1>
                <div className="card">
                    <div className="card-header">
                        <form className="form-inline float-right" onSubmit={this.addCita}>
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
                                    <th>Fecha</th>
                                    <th>Depósito</th>
                                    <th>Id Cliente</th>
                                    <th>Id Tipo Trabajo</th>
                                    <th>Id Artista</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {citas.map(c =>
                                    <tr key={c.id}>
                                        <Fragment>
                                            <td>{c.id}</td>
                                            <td>{c.fecha}</td>
                                            <td>{c.deposito}</td>
                                            <td>{c.cliente_id}</td>
                                            <td>{c.tipo_trabajo_id}</td>
                                            <td>{c.artista_id}</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm mr-1" onClick={this.updateCita(c.id)}>
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button className="btn btn-danger btn-sm" onClick={this.deleteCita(c.id)}>
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