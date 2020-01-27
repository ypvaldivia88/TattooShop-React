import React, { Component, Fragment } from 'react';
import Artistas from '../Nomencladores/Artistas';

export default class Portada extends Component {

  render() {
    return (
      <Fragment>
        <div className="container fluid">
            <Artistas />
        </div>
      </Fragment>
    );
  }

}