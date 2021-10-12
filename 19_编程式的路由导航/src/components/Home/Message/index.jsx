import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";
import "./index.css";
class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: "消息1" },
      { id: 2, title: "消息2" },
      { id: 3, title: "消息3" },
    ],
  };

  //实现跳转的details组件  为 replace跳转
  replaceShow = (id, title) => {
    //replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);

    //replace跳转+携带query参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

    //replace跳转+携带state参数
    this.props.history.replace("/home/message/detail", { id, title });
  };

  pushShow = (id, title) => {
    //push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`);

    //push跳转+携带query参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

    //replace跳转+携带state参数
    this.props.history.push("/home/message/detail", { id, title });
  };

  //后退
  back = () => {
    this.props.history.goBack()
  };

  //前进
  forward=()=>{
    this.props.history.goForward()
  }

  go=()=>{
    this.props.history.go(0)
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div className="msg-container">
        {messageArr.map((i) => {
          return (
            <div key={i.id}>
              {/* 向路由组件传递params参数 */}
              {/* <Link to={`/home/message/detail/${i.id}/${i.title}`}>
                {i.title}
              </Link> */}
              &nbsp; &nbsp;
              <button onClick={() => this.pushShow(i.id, i.title)}>
                push查看
              </button>
              &nbsp; &nbsp;
              <button onClick={() => this.replaceShow(i.id, i.title)}>
                replace查看
              </button>
              {/* 向路由组件传递search参数 */}
              {/* <Link to={`/home/message/detail?id=${i.id}&title=${i.title}`}>
                {i.title}
              </Link> */}
              {/* 向路由组件传递state参数 */}
              <Link
                to={{
                  pathname: "/home/message/detail",
                  state: { id: i.id, title: i.title },
                }}
                replace
              >
                {i.title}
              </Link>
            </div>
          );
        })}

        <br />
        {/* <Detail /> 声明接收params参数*/}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* 声明接收search参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* 声明接收state参数 */}
        <Route path="/home/message/detail" component={Detail} />

        <br />
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default Message;
