import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './home/home';
import Room from './room/room';
import Remote from './remote/remote';
import RemoteSearch from './remote/remote-search';
import RoomContextProvider from './_context/room.context';
import RemotePlaying from './remote/remote-playing';

function App() {
  return (
    <RoomContextProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/:roomId" component={Room} />
          <Route path="/remote/:roomId" exact component={Remote} />
          <Route path="/remote/:roomId/search" component={RemoteSearch} />
          <Route path="/remote/:roomId/playing" component={RemotePlaying} />
        </Switch>
      </HashRouter>
    </RoomContextProvider>
  );
}

export default App;
