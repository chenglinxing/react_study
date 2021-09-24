import React, { Component } from "react";
import hello from "./index.module.css";
console.log(hello.title);
export default class Hello extends Component {
  render() {
    return (
      <div className={hello.title}>
        <h2>Hello,React!</h2>
      </div>
    );
  }
}
