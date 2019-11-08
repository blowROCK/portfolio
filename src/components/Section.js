// import React, { Component } from "react";
// import Space from './../module/Space';
// import Contents from './../module/Contents';

// class Section extends Component {
//   constructor(props) {
//     super(props);
//     this.loadHandler = this.props.loadHandler;
//     this.state = {
//       sectionList : {
//         Space : <Space loaded={this.props.loaded} loadHandler = {this.loadHandler}></Space>,
//         Contents : 
//       }
//     };
//   }
//   render() {
//     console.log("섹션 렌더링");
//     // console.log("TCL: Section -> constructor -> this.state.loaded", this.state.loaded)
//     let {location, loaded} = this.props;
//     return (
//       <section className={"section "+ location}>
//         <Space loaded={loaded} loadHandler = {this.loadHandler}></Space>
//       </section>
//       <section className={"section "+ location}>
//         <Contents loaded={loaded} loadHandler = {this.loadHandler}></Contents>
//       </section>
//     );
//   };
// };
// export default Section;