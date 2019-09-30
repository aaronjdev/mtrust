import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';
import Persons from './pages/Persons/Persons.js';
import PersonDetail from './pages/PersonDetail/PersonDetail.js'

function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <Persons />
        </Route>
        <Route path="/persondetail">
            <PersonDetail person='person'/>
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
