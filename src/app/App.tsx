import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Room from './room/Room';
import Remote from './remote/remote';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          Homepage of ktv
        </Route>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/remote">
          <Remote />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
