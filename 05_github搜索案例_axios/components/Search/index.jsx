import React, { Component } from "react";
import "./index.css";
import service from "../../service";

// const getData = (params) => {
//   service.get({
//     url: `/search/users?q=${params}`,
//   });
// };

class index extends Component {
  search = () => {
    //获取用户的输入  搜索(使用ref的回调函数 获取输入框的值)
    // console.log(this.keyWordElement.value);
    //连续结构赋值+重命名
    const {
      keyWordElement: { value: keyWord },
    } = this;

    //发送请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    service
      .get({
        url: `/search/users?q=${keyWord}`,
      })
      .then((res) => {
        this.props.updateAppState({ users: res.items, isLoading: false });
      })
      .catch((err) => {
        this.props.updateAppState({ isLoading: false, err: err.message });
      });
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
