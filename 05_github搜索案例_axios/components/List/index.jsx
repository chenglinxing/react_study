import React, { Component } from "react";
import "./index.css";

class index extends Component {
  render() {
    const { users, isFirst, isLoading ,err} = this.props;
    return (
      <div className="list-container">
        {
          isFirst ? <h2>输入关键字点击搜索</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
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
        }
      </div>
    );
  }
}

export default index;
