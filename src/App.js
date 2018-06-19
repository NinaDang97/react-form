import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './Components/Home';
import Information from './Components/Information';
import SkillLocation from './Components/SkillLocation';
import Portfolio from './Components/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1><Link exact='true' to='/'>React Form</Link></h1>
            <nav>
              <li><Link to='/info'>Personal Information</Link></li>
              <li><Link to='/skill-location'>Skill and Location</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
            </nav>
          </header>
          <form className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/info' component={Information} />
              <Route path='/skill-location' component={SkillLocation} />
              <Route path='/portfolio'component={Portfolio} />
            </Switch>
          </form>
          <footer>
            <p>Khanh Dang, 06/2018</p>
          </footer>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
