import React, { Component, Fragment } from 'react';
import Menu from './componentes/comunes/Menu';
import Footer from './componentes/comunes/Footer';
import Portada from './componentes/comunes/Portada';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Menu />
        <div className="container fluid">
          <Portada />
        </div>
        <br /><br /><br />
        <Footer />
      </Fragment>
    );
  }

}