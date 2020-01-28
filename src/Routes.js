import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portada from './Components/Views/Portada';
import Artistas from './Components/Entities/Artistas';
import Citas from './Components/Entities/Citas';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Portada} />
            <Route path='/artistas' component={Artistas} />
            <Route path='/citas' component={Citas} />
        </Switch>
    );
}

export default Routes;