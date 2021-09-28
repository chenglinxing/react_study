import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  //全选全不选
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  //清除所有已完成
  hanldeClearAllDone = () => {
    this.props.clearAllTodo()
  };

  render() {
    const { todos, checkAll } = this.props;
    //计算已完成的个数
    const doneCount = todos.reduce(
      (prev, current) => prev + (current.done ? 1 : 0),
      0
    );
    //计算全部的个数
    const total = todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span>/全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.hanldeClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
