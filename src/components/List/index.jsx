import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

class index extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //点击搜索后加载
    err: "", //存储请求错误信息
  };

  componentDidMount() {
    PubSub.subscribe("aaa", (_, stateObj) => {
      console.log(stateObj);
      this.setState(stateObj)
    });
  }

  render() {
    const { users, isFirst, isLoading, err,a } = this.state;
    return (
      <div className="list-container">
        {isFirst ? (
          <h2>输入关键字点击搜索</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={userObj.avatar_url}
                    alt="head_portrait"
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default index;
