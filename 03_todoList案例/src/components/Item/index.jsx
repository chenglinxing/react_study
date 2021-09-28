import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: false, //标识鼠标移入移出
  };

  //鼠标移入移出的回调
  handleMouse = (flag) => {
    return () => {
      // console.log(flag);
      this.setState({
        mouse: flag,
      });
    };
  };

  //勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      // console.log(event.target.checked,id);
      this.props.updateTodo(id, event.target.checked);
    };
  };

  //删除一个todo的回调
  handleDelete = (id) => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { todo } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.handleCheck(todo.id)}
          />
          <span>{todo.name}</span>
          <button
            className="btn btn-danger"
            style={{ display: mouse ? "block" : "none" }}
            onClick={() => {
              this.handleDelete(todo.id);
            }}
          >
            删除
          </button>
        </label>
      </li>
    );
  }
}
