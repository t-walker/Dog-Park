import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './Navigation';
import NotFound from './404';

import Home from '../containers/HomePage/HomePage';
import ParkListing from '../containers/ParkListing/ParkListing';
import ParkView from '../containers/ParkView/ParkView';
import SubmitPage from '../containers/SubmitPage/SubmitPage';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
              <Navigation />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/parks" component={ParkListing} />
                  <Route path="/park/:id" component={ParkView} />
                  <Route path="/submit" component={SubmitPage} />
                  <Route component={NotFound}/>
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default Main;
