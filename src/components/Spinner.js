/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
// import { random } from "./../util/random";
import "./Spinner.sass";

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.loadHandler = this.props.loadHandler.bind(this);
    this.state = {
      tick: 24,
      sec : 1000
    };
  }
  isLoaded(){
    let loaded = this.props.loaded;
    if(loaded) this.animate();
    return (loaded===true)?"loaded":"loading";
  }
  componentDidMount(){
  }
  animate(){
    let element = document.getElementById('spinner');
    this.fade(element, 400);
  }
  fade(element, duration) {
    let op = 1;
    let time = this.state.tick/this.state.sec * 1000;
    let minusValue = 1 / (duration/this.state.tick);

    let anime = setInterval(function() {
      if (op <= 0) {
        clearInterval(anime);
        element.style.display = "none";
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= minusValue;
      
    }, time);
  }
  render() {
    return (
      <div id="spinner" className={"spinner "+ this.isLoaded()}>
        <div className="center">
          <img src={require("./../assets/img/spinner.gif")}></img>
          <div>GitPage가 느릴 수 있습니다.. 조금만 기다려주세요!</div>
        </div>
      </div>
    );
  }
}
export default Spinner;
