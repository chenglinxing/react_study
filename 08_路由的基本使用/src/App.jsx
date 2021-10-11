import React, { Component } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app-container">
      
          <Link to="/about">About</Link>
          <br />
          <Link to="/home">Home</Link>
        
      
        {/* 注册路由 */}
        
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
       
      </div>
    );
  }
}

export default App;
