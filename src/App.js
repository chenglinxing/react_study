import React, { Component } from "react";
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-container">
          <div className="todo-wrap">
            <div className="todo-header">
              <input
                type="text"
                placeholder="请输入你的任务名称，按回车键确认"
              />
            </div>

            <ul className="todo-main">
              <li>
                <label>
                  <input type="checkbox" />
                  <span>xxxx</span>
                  <button
                    className="btn btn-danger"
                    style={{ display: "none" }}
                  >
                    删除
                  </button>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>xxxx</span>
                  <button
                    className="btn btn-danger"
                    style={{ display: "none" }}
                  >
                    删除
                  </button>
                </label>
              </li>
            </ul>

            <div className="todo-footer">
              <label>
                <input type="checkbox" />
              </label>
              <span>
                <span>已完成</span>/全部2
              </span>
              <button className="btn btn-danger">清除已完成任务</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
