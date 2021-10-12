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
  render() {
    const { messageArr } = this.state;
    return (
      <div className="msg-container">
        {messageArr.map((i) => {
          return (
            <div key={i.id}>
              {/* 向路由组件传递params参数 */}
              {/* <Link to={`/home/message/detail/${i.id}/${i.title}`}>{i.title}</Link> */}

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
              >
                {i.title}
              </Link>
            </div>
          );
        })}

        <br />
        {/* <Detail /> 声明接收params参数*/}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* 声明接收search参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* 声明接收state参数 */}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}

export default Message;
