import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
import service from "../../service";

// const getData = (params) => {
//   service.get({
//     url: `/search/users?q=${params}`,
//   });
// };

class index extends Component {
  search = async () => {
    //获取用户的输入  搜索(使用ref的回调函数 获取输入框的值)
    // console.log(this.keyWordElement.value);
    //连续结构赋值+重命名
    const {
      keyWordElement: { value: keyWord },
    } = this;

    //发送请求前通知List更新状态
    // this.props.updateAppState({ isFirst: false, isLoading: true });
    PubSub.publish("aaa", { isFirst: false, isLoading: true });
    service
      .get({
        url: `/search/users?q=${keyWord}`,
      })
      .then((res) => {
        // this.props.updateAppState({ users: res.items, isLoading: false });
        PubSub.publish("aaa", { users: res.items, isLoading: false });
      })
      .catch((err) => {
        // this.props.updateAppState({ isLoading: false, err: err.message });
        PubSub.publish("aaa", { isLoading: false, err: err.message });
      });

    // fetch未优化
    // fetch(`https://api.github.com/search/users?q=${keyWord}`)
    //   .then(
    //     (res) => {
    //       console.log("连接服务器成功");
    //       return res.json();
    //     },
    //     (err) => {
    //       console.log("连接服务器失败", err);
    //       return new Promise(() => {});
    //     }
    //   )
    //   .then(
    //     (res) => {
    //       console.log("获取数据", res);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );

    //优化版本1
    // fetch(`https://api.github.com/search/users?q=${keyWord}`)
    //   .then((res) => {
    //     console.log("连接服务器成功");
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log("获取数据", res);
    //   })
    //   .catch((err) => {
    //     console.log("请求出错", err);
    //   });

    //优化版本2  通过async await
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyWord}`
      );
      const data = await response.json();
      console.log(data);
      PubSub.publish("aaa", { users: data.items, isLoading: false });
    } catch (error) {
      PubSub.publish("aaa", { isLoading: false, err: error.message });
      console.log("请求出错", error);
    }
  };
  render() {
    return (
      <div className="search-container">
        <h2>Search Github Users</h2>
        <div className="opreate">
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          <button onClick={this.search}>Search </button>
        </div>
      </div>
    );
  }
}

export default index;
