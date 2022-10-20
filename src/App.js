import React, { Component } from "react";
import "./App.css";
// import { Dropdown } from "./components/Dropdown";
// import { Counter } from "./components/Counter";
// import { ColorPicker } from "./components/ColorPicker";
// import { ToDoList } from "./components/ToDoList/ToDoList";
import { Form } from "./components/Form";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

export class App extends Component {
  state = {
    // todos: [
    //   { id: "id-1", text: "Выучить основы реакт", completed: true },
    //   { id: "id-2", text: "Разобраться с реакт роутер", completed: false },
    //   { id: "id-3", text: "Пережить редакс", completed: false },
    // ],
  };

  formSubmitHadler = (data) => {
    console.log(data);
  };

  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  render() {
    // const { todos } = this.state;
    // const totalTodoCount = todos.length;
    // const compeletedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <>
        <Form onSubmit={this.formSubmitHadler} />
        {/* return <Counter initialValue={0} />; */}
        {/* return <Dropdown />; */}
        {/* return <ColorPicker options={colorPickerOptions} />; */}
        {/* <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Общее кол-во выполненых: {compeletedTodos}</p>
        </div> */}
        {/* <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}
