import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Other from './pages/Other';
// import NoMatch from './pages/NoMatch';
import MeldOpp from './pages/MeldOppContainer';


const App: React.FC = () => {
  return (
    <Router>
      <Link to="">Home</Link>
      <Link to="other">Other</Link>
      <Link to="meldopp">MeldOpp</Link>      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route exact path="" component={Home} />
          <Route path="/other" component={Other} />
          <Route path="/meldopp" component={MeldOpp} />
        </header>
      </div>
    </Router>
  );
}

export default App;
