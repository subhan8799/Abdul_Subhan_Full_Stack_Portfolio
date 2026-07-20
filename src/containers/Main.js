import React, { Component } from "react";
import Home from "../pages/home/HomeComponent";

export default class Main extends Component {
  render() {
    return <Home theme={this.props.theme} />;
  }
}
