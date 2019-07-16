import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Other from '../pages/Other';
import NoMatch from '../pages/NoMatch';
import MeldOpp from '../pages/MeldOppContainer';
import TopBar from './TopBar';


const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <div className="App">
        <header className="app-content">
          <Switch>
            <Route exact path="/" component={MeldOpp} />
            <Route path="/other" component={Other} />
            <Route component={NoMatch} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
