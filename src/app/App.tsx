import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Room from './room/Room';
import Remote from './remote/remote';
import RemoteSearch from './remote/remote-search';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          Homepage of ktv
        </Route>
        <Route path="/room" component={Room} />
        <Route path="/remote" exact component={Remote} />
        <Route path="/remote/search" component={RemoteSearch} />
      </Switch>
    </HashRouter>
  );
}

export default App;
