import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './Components/Page/Home';
import Information from './Components/Page/Information';
import Skill from './Components/Page/Skill';
import Portfolio from './Components/Page/Portfolio';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: {},
      errorInfo: true,
      skill: {},
      errorSkill: true,
      portfolio: {},
      errorPortfolio: true
    }
  }

  handleDisabled = (errors) => {
    return Object.values(errors).some(errMsg => errMsg);   
  } 

  onNext = (values, event) => {
    const field = event.target.name;
    if(field === 'info')
    { this.setState({
        errorInfo: false,
        [field]: {...values}
      })
     } else if (field === 'skill') {
        this.setState({
        errorSkill: false,
        [field]: {...values}
      })
    } else {
      this.setState({
        errorPortfolio: false,
        [field]: {...values}
      })
    }
  }

  render() {
    const {info, errorInfo, skill, errorSkill, portfolio} = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1><Link exact='true' to='/'>React Form</Link></h1>
            <nav>
              <li><Link to='/info'><button>Personal Information</button></Link></li>
              <li><Link to='/skill'><button disabled={errorInfo}>Skill and Location</button></Link></li>
              <li><Link to='/portfolio'><button disabled={errorSkill}>Portfolio</button></Link></li>
            </nav>
          </header>
          <form className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/info' render={() => <Information handleDisabled={this.handleDisabled} onNext={this.onNext} info={info} />} />
              <Route path='/skill' render={() => <Skill handleDisabled={this.handleDisabled} onNext={this.onNext} skill={skill} />} />
              <Route path='/portfolio' render={() => <Portfolio handleDisabled={this.handleDisabled} submit={this.onNext} portfolio={portfolio}  />} />
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
