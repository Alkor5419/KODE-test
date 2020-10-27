import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Message from './components/Message/Message';
import Main from './components/Main/Main';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  const [Path, setPath] = useState(null)
  const [Data, setData] = useState(null)
  return (
    <BrowserRouter >
    <Switch>
    
      <Route exact path = '/' component = {Login} />
      <Route path = '/message' component = {Message} />
      <Route path = '/main' component = {Main} setData = {(value) => setData(value)}/>
      <Route path = '/pokemon' component = {Pokemon} data = {Data}/>
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
