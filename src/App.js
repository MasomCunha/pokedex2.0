import React from 'react';
import './App.css'
import Pokedex from './pages/PokedexHome.jsx'
import SinglePokemon from './pages/SinglePokemon.jsx'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={ Pokedex } />
          <Route path="/pokemon/:pokemon" component={ SinglePokemon } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
