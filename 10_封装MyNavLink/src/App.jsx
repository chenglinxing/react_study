import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyNavLink from "./components/MyNavLink";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app-container">
      
          {/* <NavLink activeClassName="active" to="/about">About</NavLink>
          <br />
          <NavLink to="/home">Home</NavLink> */}

          <MyNavLink to="/about"  a="1">about</MyNavLink>
          <MyNavLink to="/home">home</MyNavLink>
        
      
        {/* 注册路由 */}
        
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>

      </div>
    );
  }
}

export default App;
