import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Room from './room/room';
import Remote from './remote/remote';
import RemoteSearch from './remote/remote-search';
import RoomContextProvider from './_context/room.context';

function App() {
  return (
    <RoomContextProvider>
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
    </RoomContextProvider>
  );
}

export default App;
