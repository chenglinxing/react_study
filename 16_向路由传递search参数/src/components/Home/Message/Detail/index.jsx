import React, { Component } from "react";
// import qs from "querystring";
import "./index.css";
const DetailData = [
  { id: 1, content: "内容1" },
  { id: 2, content: "内容2" },
  { id: 3, content: "内容3" },
];

let obj = { name: "tom", age: 20 }; //name=tom&age=20   urlencoded编码
// console.log(qs.stringify(obj),qs);
class Detail extends Component {
  render() {
    //接收params参数
    // const { id, title } = this.props.match.params;

    //接收search参数
    const { search } = this.props.location;
    // console.log(qs.parse(search.slice(1)));
    const { id, title } = qs.parse(search.slice(1));

    //接收state参数
    // const { id, title } = this.props.location.state;
    const findResult = DetailData.find((i) => {
      return i.id === Number(id);
    });
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
