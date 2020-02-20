import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Artistas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artistas: []
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
            .catch(console.log(console.error))
    }

    /*     deleteArtista = id => {
            axios.delete(`/artistas/${id}`)
                .then(this.getArtistas())
                .catch(err => console.error(err))
        } */

    tabRow() {
        return this.state.artistas.map(function (o, i) {
            return (
                <tr key={i}>
                    <td>{o.id}</td>
                    <td>{o.nombre}</td>
                    <td>
                        <Link to={"/artistas/edit/" + o.id} className="btn btn-primary">Editar</Link>
                        <button className="btn btn-danger btn-sm" onClick={this.deleteArtista(o.id)}>
                            <i className="fa fa-eraser"></i>
                        </button>
                    </td>
                </tr>
            )
        });
    }

    render() {
        return (
            <Fragment>
                <h1>Artistas</h1>
                <div className="card">
                    <div className="card-header">
                        <Link to="/artistas/create" className="btn btn-success ml-2 float-right">
                            <i className="fa fa-plus"></i> Crear nuevo Artista
                        </Link>
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
                                {this.tabRow()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        );
    }

}