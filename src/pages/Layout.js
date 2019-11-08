import React, { Component } from "react";
// import Section from "./../components/Section";
import "./Layout.sass";
import Contents from "../module/Contents";
import Space from './../module/Space';

// import { BrowserRouter, Route, Link } from "react-router-dom";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.loadHandler = this.loadHandler.bind(this);
    this.state = {
      loaded: false
    };
  }
  loadHandler(value) {
    console.log("스테이트 값이 변함 : ", value);
    this.setState({
      loaded: value
    });
    console.log("TCL: Layout -> this.state.loaded", this.state.loaded)
  }
  render() {
    return (
      <div className="wrapper">
        <Space
          loaded={this.state.loaded}
          loadHandler={this.loadHandler}
          location="Space"
        ></Space>
        <Contents
          loaded={this.state.loaded}
          loadHandler={this.loadHandler}
          location="Contents"
        ></Contents>
      </div>
    );
  }
}
export default Layout;
