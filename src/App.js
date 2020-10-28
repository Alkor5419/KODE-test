import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Message from './components/Message/Message';
import Main from './components/Main/Main';
import Pokemon from './components/Pokemon/Pokemon';
import {loginPath, messagePath, mainPath, pokemonPath} from './components/constatns';
function App() {
   
  return (
    <BrowserRouter >
    <Switch>
    
      <Route exact path = {loginPath} component = {Login} />
      <Route path = {messagePath} component = {Message} />
      <Route path = {mainPath}  component = {Main} />
      <Route path = {pokemonPath} component = {Pokemon} />
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
