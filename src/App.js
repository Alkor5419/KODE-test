import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Message from './components/Message/Message';
import Main from './components/Main/Main';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <BrowserRouter >
    <Switch>
    <div className="App">
      <Route exact path = '/' component = {Login} />
      <Route path = '/message' component = {Message} />
      <Route path = '/main' component = {Main} />
      <Route path = '/pokemon' component = {Pokemon} />
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
