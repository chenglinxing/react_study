import React, { Component } from "react";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../MyNavLink";
import { Switch, Route } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>我是Home的内容</h1>
        <div className="home-menu">
          <MyNavLink to="/home/news">News</MyNavLink>
          &nbsp;&nbsp;&nbsp;
          <MyNavLink to="/home/message">Messgae</MyNavLink>
        </div>

        {/* <News></News>
        <Message></Message> */}
        <br />
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          {/* <Redirect to="/home/news" /> */}
        </Switch>
      </div>
    );
  }
}

export default Home;
