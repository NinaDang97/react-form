import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './Components/Home';
import Information from './Components/Information/index';
import SkillLocation from './Components/SkillLocation';
import Portfolio from './Components/Portfolio';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorInfo: true,
      errorSkill: true,
    }
  }

  handleDisabledInfo = (errors) => {
    const errorInfo = Object.values(errors).some(errMsg => {
			return errMsg;
    });   
    return errorInfo;
  } 

  onNext = (errorInfo) => {
    this.setState({errorInfo});
  }

  render() {
    const {errorInfo, errorSkill} = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1><Link exact='true' to='/'>React Form</Link></h1>
            <nav>
              <li><Link to='/info'><button>Personal Information</button></Link></li>
              <li><Link to='/skill-location'><button disabled={errorInfo}>Skill and Location</button></Link></li>
              <li><Link to='/portfolio'><button disabled={errorSkill}>Portfolio</button></Link></li>
            </nav>
          </header>
          <form className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/info' render={() => <Information handleDisabledInfo={this.handleDisabledInfo} onNext={this.onNext} />} />
              <Route path='/skill-location' component={SkillLocation} />
              <Route path='/portfolio' component={Portfolio} />
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
