import React, { Component } from "react";
// import Section from "./../components/Section";
import "./App.sass";
import Contents from "../components/Contents";
import Space from './../components/Space';

// import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
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
  }
  render() {
    return (
      // <Main>

      // </Main>
      <div className="App">
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
export default App;
