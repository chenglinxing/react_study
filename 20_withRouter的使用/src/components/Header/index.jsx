import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  back = () => {
    this.props.history.goBack();
  };

  //前进
  forward = () => {
    this.props.history.goForward();
  };

  go = () => {
    this.props.history.go(0);
  };
  render() {
    return (
      <div>
        React Router Demo
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default withRouter(Header);

//withRouter可以加工一般组件，可以让一般组件具备路由组件所特有的api
//withRouter的返回值是一个新组件
