import React, { Component } from "react";
import Space from './../module/Space';
import Contents from './../module/Contents';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionList : {
        Space : <Space></Space>,
        Contents : <Contents></Contents>
      }
    };
  }
  render() {
    let locationName = this.props.location;
    console.log("TCL: Section -> render -> locationName", locationName)
    return (
      <section className={"section "+ locationName}>
        {this.state.sectionList[locationName]}
      </section>
    );
  };
};
export default Section;