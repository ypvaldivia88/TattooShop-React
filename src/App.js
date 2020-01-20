import React, { Component, Fragment } from 'react';
import Menu from './componentes/menu/Menu';
import Footer from './componentes/footer/Footer';
import Artistas from './componentes/Artistas';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Menu />
        <div className="container fluid">
          <Artistas />

        </div>
        <Footer />
      </Fragment>
    );
  }

}

export default App;
