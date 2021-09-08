import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import RAndMContainer from '../../containers/RAndMContainer';
import RAndMDetailContainer from '../../containers/RAndMDetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RAndMContainer} />
        <Route path="/:id" component={RAndMDetailContainer} />
      </Switch>
    </Router>
  );
}
