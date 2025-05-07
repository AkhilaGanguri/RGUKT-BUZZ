// App.js or where your routing is configured
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Schedule from './Schedule.jsx';
import UpdateMatchPage from './UpdateMatchPage.jsx';
import MatchContextProvider from './Admin/MatchContext.jsx';

const App = () => (
  <Router>
    <MatchContextProvider>
      <Switch>
        <Route exact path="/home" component={Schedule} />
        <Route path="/UpdateMatch/:index" component={UpdateMatchPage} />
      </Switch>
    </MatchContextProvider>
  </Router>
);

export default App;
