import React, { Component } from "react";
import Section from "./../components/Section";
import "./Layout.sass";
import Header from './../module/Header';
// import { BrowserRouter, Route, Link } from "react-router-dom";


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionList : {
        Header : <Header></Header>
      }
    };
  }
  render() {
      return(
        <div className='wrapper'>
          <Section location="Header"></Section>
        </div>
      );
  }
}
export default Layout;
