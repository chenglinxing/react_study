import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Search/>
        <List/>
      </div>
    );
  }
}

export default App;
