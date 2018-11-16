import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
       <Switch>
       <Route exact path='/' component={Portfolio} />
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
