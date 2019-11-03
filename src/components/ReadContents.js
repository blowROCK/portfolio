import React, { Component } from "react";
class ReadContents extends Component {
  render() {
    let data = this.props.data || '';
    console.log("TCL: ReadContents -> render -> data", data)
    return (
      <section className="ReadContents">
        <article>
          <div>
            <h1 _id={data._id}>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        </article>
      </section>
    );
  };
};
export default ReadContents;
