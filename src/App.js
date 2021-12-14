// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import {Main} from "./components/Main"
import Login from "./components/Login"
import Profile from "./components/Profile"
import News from "./components/News"
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    localStorage.setItem("auth", "false");
  }
  render(){
    return (
      <div>
        <Router>
          <div>
            <nav>
              <Link to="/">Main</Link>
              <br></br>
              <Link to="/news">News</Link>
              <br></br>
              <Link to="/profile">Profile</Link>
            </nav>
          </div>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/news" component={News}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;
