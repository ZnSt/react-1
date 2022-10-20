import "./App.css";
import { Component } from "react";
import { Form } from "./components/Form /Form";

export class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
