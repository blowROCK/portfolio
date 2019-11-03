/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class Control extends Component {
  render() {
    let menu = this.props.menu;
    let handler = this.props.handler;


    return (
      <nav className="Control">
        <ul>
          {
            menu.map(function(item, index){
              return (
                <li key={index}>
                  <a 
                    className="Link" 
                    href={'/'+item.name}
                    onClick={function(e){
                      e.preventDefault();
                      handler(item.name);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    );
  };
};
export default Control;