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

        <div className="menu">
          <MyNavLink  to="/about" a="1">
            about
          </MyNavLink>
          <MyNavLink  to="/home">home</MyNavLink>
        </div>

        {/* 注册路由 */}
        {/* exact 默认是模糊匹配，开始严格匹配后  路径必须相同 */}

        <div className="content">
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
          {/* <Redirect to="/home" /> */}
        </div>
      </div>
    );
  }
}

export default App;
