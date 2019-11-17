import React, { Component } from "react";

class SVG extends Component {
  render() {
    return(
      <svg
        x="0px" y="0px"
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 150 150">
        <polygon
          className="hex"
          points={this.props.points}
        ></polygon>
      ></svg>
    );
  }
}

export default SVG;