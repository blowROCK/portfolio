import React, { Component } from "react";
import './../assets/img/earth_B.jpg';
import './../assets/img/earth_L.jpg';
// import './../assets/img/milky.png';
import './Header.sass';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="stars">
          <div className="milkyway"></div>
        </div>
        <div className="earth">
          
        </div>
      </div>
    );
  };
};
export default Header;
