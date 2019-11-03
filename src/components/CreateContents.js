import React, { Component } from "react";
class CreateContents extends Component {
  render() {
    // let data = this.props.data;
    return (
      <section className="CreateContents">
        <article>
          <form
            action="/create_process"
            method="post"
            onSubmit={function(e) {
              e.preventDefault();
              let content = {
                title : e.target.title.value,
                desc : e.target.desc.value
              }
              this.props.handler(content);
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea type="text" name="desc" placeholder="desc"></textarea>
            </p>
            <p>
              <input type="submit" name="submit"></input>
            </p>
          </form>
        </article>
      </section>
    );
  }
}
export default CreateContents;