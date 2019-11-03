/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import Navigation from "./components/Navigation";
import ReadContents from "./components/ReadContents";
import CreateContents from "./components/CreateContents";
import Control from "./components/Control";

import logo from "./logo.svg";
import "./App.sass";

const menu_obj = [
  { name: "HOME" },
  { name: "HTML" },
  { name: "SASS" },
  { name: "REACT" }
];
const CRUD_Obj = [
  { name: "Create" },
  { name: "Update" },
  { name: "Delete" }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.handleType = this.handleType.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.handle_Contents_create = this.handle_Contents_create.bind(this);
    this.state = {
      mode:"CREATE",
      type: "HOME",
      subject: menu_obj,
      crud : CRUD_Obj,
      contents: {
        HOME: { 
          _id: 1, 
          title: "HOME", 
          desc: "어서와 리엑트는 처음이지?" 
        },
        HTML: { 
          _id: 2, 
          title: "HTML", 
          desc: "HTML은 마크업이야." 
        },
        SASS: {
          _id: 3,
          title: "SASS",
          desc: "SASS는 CSS를 더 쉽게 만들어줘"
        },
        REACT: {
          _id: 4,
          title: "REACT",
          desc: "React는 angularJS보다 편하고 신기해"
        }
      }
    };
    this._content = '';
    this._article = '';
  }
  handleType(value) {
    this.setState({
      type : value,
      mode : 'READ'
    });
  }
  handleMode(value) {
    this.setState({
      mode: 'CREATE'
    });
  }
  handle_Contents_create(content){
    this.setState(prevState => {
      let length = Object.keys(prevState).length;
      let contents = { ...prevState.contents };
      let subject = [...prevState.subject];
      contents[content.title] = {
        _id : length,
        title : content.title, 
        desc : content.desc
      };
      subject.push({name:content.title});
      return {contents, subject}
    });
  }
  render() {
    this._content = this.state.contents[this.state.type];
    if(this.state.mode==='READ'){
      this._article = <ReadContents data={this._content}></ReadContents>;
    }else if(this.state.mode==='CREATE'){
      this._article = <CreateContents handler={this.handle_Contents_create}></CreateContents>;
    }
    return (
      <div className="App w-full">
        <Header></Header>

        <Navigation
          menu={this.state.subject}
          handler={this.handleType}
        ></Navigation>

        <Control 
          menu={this.state.crud} 
          handler={this.handleMode}
        ></Control>
        {this._article}
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
