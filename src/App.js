import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Message from './components/Message/Message';
import Main from './components/Main/Main';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
   
  return (
    <BrowserRouter >
    <Switch>
    
      <Route exact path = '/KODE-test/' component = {Login} />
      <Route path = '/message' component = {Message} />
      <Route path = '/main'  component = {Main} />
      <Route path = '/pokemon' component = {Pokemon} />
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
