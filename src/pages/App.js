import React, { Component } from "react";
// import Section from "./../components/Section";
import "./App.sass";
import Contents from "../components/Contents";
import Space from './../components/Space';
import Spinner from './../components/Spinner';

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
    this.setState({
      loaded: value
    });
  }
  render() {
    return (
      <div className="App">
        <Spinner loaded={this.state.loaded}
          loadHandler={this.loadHandler}></Spinner>
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
