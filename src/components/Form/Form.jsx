import { Component } from "react";
import { FormSt, Input } from "./Form.styled";

export class Form extends Component {
  state = {};

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements.login.value;
    console.log(form);
  };

  render() {
    return (
      <FormSt onSubmit={this.handleSubmit}>
        <label htmlFor="login">
          Login
          <Input />
        </label>
        <label htmlFor="password">
          Password
          <Input />
        </label>
        <button type="submit">Send Form</button>
      </FormSt>
    );
  }
}
