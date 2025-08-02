import React, { Component } from "react";

export default class NormalClassComponent extends Component {
  render() {
    console.log("Normal component renders");
    return <h1>{this.props.hi}</h1>;
  }
}
ggg