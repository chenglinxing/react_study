import React, { Component } from "react";
import "./index.css";
const DetailData = [
  { id: 1, content: "内容1" },
  { id: 2, content: "内容2" },
  { id: 3, content: "内容3" },
];

class Detail extends Component {
  render() {
    // console.log(this.props);
    const { id, title } = this.props.match.params;
    const findResult = DetailData.find((i) => {
      return i.id === Number(id)
    });
    console.log(findResult);
    return (
      <div className="detail-container">
        <span>ID:{id}</span>
        <span>Title:{title}</span>
        <span>Content:{findResult.content}</span>
      </div>
    );
  }
}

export default Detail;
