import React, { Component } from "react";
import {Button} from "antd"
import {WechatFilled} from "@ant-design/icons"
// import 'antd/dist/antd.css'

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Button type="primary" icon={<WechatFilled/>}>1</Button>
        <WechatFilled/>
      </div>
    );
  }
}

export default App;
