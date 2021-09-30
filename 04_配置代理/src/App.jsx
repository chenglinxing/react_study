import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  getData = () => {
    axios.get("http://localhost:3000/index.html").then(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getData}>获取数据</button>
      </div>
    );
  }
}

export default App;
