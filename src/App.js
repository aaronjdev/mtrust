import React from 'react';
import { BrowserRouter, Switch,  Route } from "react-router-dom"
import './App.css';
import Persons from './pages/Persons/Persons.js';
import PersonDetail from './pages/PersonDetail/PersonDetail.js'

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Persons} />
        <Route path="/persondetail" exact  component={PersonDetail} />
    </BrowserRouter>
  );
}

export default App;
