import { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    tag: "",
  };

  handleChange = (event) => {
    this.setState = { [event.currentTarget.name]: event.currentTarget.value };
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label>
          Surname
          <input type="text" name="tag" value={this.state.tag} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
