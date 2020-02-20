import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portada from './Components/Views/Portada';
import Artistas from './Components/Views/Artistas';
import ArtistaCreate from './Components/Views/Artistas/ArtistaCreate';
import ArtistaEdit from './Components/Views/Artistas/ArtistaEdit';
import Citas from './Components/Views/Citas';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Portada} />
            <Route path='/artistas' component={Artistas} />
            <Route path='/artistas/create' component={ArtistaCreate} />
            <Route path='/artistas/edit:id' component={ArtistaEdit} />
            <Route path='/citas' component={Citas} />
        </Switch>
    );
}

export default Routes;