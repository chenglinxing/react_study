import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MyNavLink extends Component {
  render() {
      // console.log(this.props);
    // const { children } = this.props;
    return (
      <div>
        <NavLink {...this.props}/>
      </div>
    );
  }
}

export default MyNavLink;
