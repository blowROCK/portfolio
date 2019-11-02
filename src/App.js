import React, { Component } from "react";

import Navigation from "./components/Navigation"
import Contents from "./components/Contents"

import logo from "./logo.svg";
import "./App.sass";


const menuObj = [
  { name: "HTML", link: "https://bible.com/1/mat.1" },
  { name: "SASS", link: "https://bible.com/1/mrk.1" },
  { name: "REACT", link: "https://bible.com/1/luk.1" }
];

class App extends Component {
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      mode: 'HOME',
      subject: { menu: menuObj },
      contents: [
        {_id:'001', title: "HTML", desc:"HTML은 마크업이야."},
        {_id:'002', title: "SASS", desc:"SASS는 CSS를 더 쉽게 만들어줘"},
        {_id:'003', title: "REACT", desc:"REACT는 angularJS보다 편하고 신기해"}
      ]
    };
  }
  handler(value){
    this.setState({
      mode:value
    })
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Navigation menu = {this.state.subject.menu} handler={this.handler}></Navigation>
        <Contents data = {this.state.contents} ></Contents>
        <p>{this.state.mode}</p>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}


export default App;
