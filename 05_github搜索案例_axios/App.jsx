import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
class App extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //点击搜索后加载
    err: "", //存储请求错误信息
  };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="app-container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}

export default App;
