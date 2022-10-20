import React, { Component } from "react";
const shortid = require("shortid");

export class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "Junior",
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name{" "}
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label htmlFor={this.tagInputId}>
            Surname{" "}
            <input type="text" name="tag" value={this.state.tag} onChange={this.handleChange} />
          </label>
          <p>Your Level Develop:</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === "junior"}
            />{" "}
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === "middle"}
            />{" "}
            Middle
          </label>{" "}
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === "senior"}
            />{" "}
            Senior
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
