import React, { Component } from "react";
class Contents extends Component {
  render() {
    let data = this.props.data;
    return (
      <section className="Contents">
        <article>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <h1 _id={item._id}>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </article>
      </section>
    );
  }
}

export default Contents;
