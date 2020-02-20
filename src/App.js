import React, { Component, Fragment } from 'react';
import Menu from './Components/Templates/Menu';
import Footer from './Components/Templates/Footer';
import Routes from './Routes';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Menu /><br />
        <div className="container fluid">
          <Routes />
        </div>
        <br /><br /><br />
        <Footer />
      </Fragment>
    );
  }

}