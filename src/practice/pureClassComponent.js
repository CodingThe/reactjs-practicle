import { PureComponent } from "react";

export default class PureClassComponent extends PureComponent {
  render() {
    console.log("Pure component renders");
    return <h1>{this.props.hi}</h1>;
  }
}