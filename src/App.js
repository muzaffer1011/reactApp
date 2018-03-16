import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Welcome from './components/Welcome';
import Add_Profile from './components/Add_Profile';
import Remove_Profile from './components/Remove_Profile';
import Update_Profile from './components/Update_Profile';
import View_Profile from './components/View_Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
            <Header />
            <div className="App-wrapper">
              <Router>
                <Switch>
                  <Route path="/add-profile" component={Add_Profile} />
                  <Route path="/remove-profile" component={Remove_Profile} />
                  <Route path="/update-profile" component={Update_Profile} />
                  <Route path="/view-profile" component={View_Profile} />
                  <Route path="/" component={Welcome} />
                </Switch>
              </Router>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
