/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

import "./Contents.sass";


class Contents extends Component {
  constructor(props) {
    super(props);
    this.loadHandler = this.props.loadHandler.bind(this);
    this.state = {
      loaded: this.props.loaded
    }
  }
  render() {
    console.log("컨탠츠 렌더링");
    let loaded = this.props.loaded;
    console.log("TCL: Contents -> render -> loaded", loaded)
    return (
      
      <section className={"section Contents"}>
        
        <div className={this.state.loaded === true ? 'LOADED':''} id="Contents">
          <p>{this.state.loaded}</p>
          <div className={loaded === true ? 'LOADED' : 'load'} ></div>
        </div>
      </section>
      
    );
  }
}
export default Contents;
