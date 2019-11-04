import React, { Component } from "react";
import Header from './../module/Header';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionList : {
        Header : <Header></Header>
      }
    };
  }
  render() {
    let locationName = this.props.location;
    return (
      <section className={"section "+ locationName}>
        {this.state.sectionList[locationName]}
      </section>
    );
  };
};
export default Section;