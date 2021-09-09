import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route 
} from 'react-router-dom';
import RAndMContainer from '../../containers/RAndMContainer';
import RAndMDetailContainer from '../../containers/RAndMDetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RAndMContainer} />
        <Route exact path="/:id" component={RAndMDetailContainer} />
      </Switch>
    </Router>
  );
}
