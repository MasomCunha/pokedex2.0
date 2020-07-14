import React from 'react';
import './App.css'
import Pokedex from './pages/PokedexHome.jsx'
import SinglePokemon from './pages/SinglePokemon.jsx'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import pokedexBackground from './img/pokebackground.jpg'



function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${pokedexBackground})`, height: "100%" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/pokedex2.0" />
          </Route>
          <Route path='/pokedex2.0' exact={true} component={Pokedex} />
          <Route path="/pokemon/:pokemon" component={SinglePokemon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
