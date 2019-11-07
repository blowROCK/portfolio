import React, { Component } from "react";
import Section from "./../components/Section";
import "./Layout.sass";
// import { BrowserRouter, Route, Link } from "react-router-dom";


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
      return(
        <div className='wrapper'>
          <Section location="Space"></Section>
          <Section location="Contents"></Section>
        </div>
      );
  }
}
export default Layout;
