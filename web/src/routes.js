import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index.js';
import GameDetails from './pages/GameDetails/index.js';
import BuyGame from './pages/BuyGame/index.js';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/games/:id" component={GameDetails} />
            <Route path="/buy/:id" component={BuyGame} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

/* 
    <BrowserRouter> - para definir a utilzação das rotas atraves de um browser
    <Switch> - para permitir que apenas uma unica rota seja chamada ao mesmo tempo
*/