/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class Navigation extends Component {
  shouldComponentUpdate(newProps, newState){
    if(newProps.menu === this.props.menu)
      return false;
    return true;
  }
  render() {
    return (
      <nav className="Navigation">
        <ul>
          {this.props.menu.map(function(item, index) {
            return (
              <li key={index} name={item.name}>
                <a className="Link" onClick={function(e){
                  e.preventDefault();
                  this.props.handler(item.name);
                }.bind(this)}>
                  {index + 1}. {item.name} 
                </a>
              </li>
            );
          }.bind(this))}
        </ul>
      </nav>
    );
  };
};
export default Navigation;
