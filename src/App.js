import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Switch,Router} from 'react-router-dom'
import history from './history'
import DaftarHome from './components/DaftarHome'
import InstitutionHome from './components/institutionForm/InstitutionHome'
import PersonalHome from './components/personalForm/wizard'
import confirmPage from './components/institutionForm/ConfirmPage'
import confirmPageUser from './components/personalForm/ConfirmPageUser'
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={DaftarHome}/>
            <Route exact path="/institutional-register" component={InstitutionHome}/>
            <Route exact path="/personal-register" component={PersonalHome}/>
            <Route exact path="/confirm-page" component={confirmPage}/>
            <Route exact path="/user-confirm-page" component={confirmPageUser}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
