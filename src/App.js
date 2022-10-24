import React, { Component } from "react";
import "./App.css";
import shortid from "shortid";
// import { Dropdown } from "./components/Dropdown";
// import { Counter } from "./components/Counter";
// import { ColorPicker } from "./components/ColorPicker";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { TodoEditor } from "./components/TodoEditor";
import { Filter } from "./components/Filter";
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
    todos: [
      { id: "id-1", text: "Выучить основы реакт", completed: true },
      { id: "id-2", text: "Разобраться с реакт роутер", completed: false },
      { id: "id-3", text: "Пережить редакс", completed: false },
      { id: "id-4", text: "Окончить курс", completed: false },
    ],

    filter: "",
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) => todo.text.toLowerCase().includes(normalizedFilter));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const compeletedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    return (
      <>
        {/* return <Counter initialValue={0} />; */}

        {/* return <Dropdown />; */}

        {/* return <ColorPicker options={colorPickerOptions} />; */}
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Общее кол-во выполненых: {compeletedTodos}</p>
        </div>
        <Filter onChange={this.changeFilter} />
        <TodoEditor onSubmit={this.addTodo} value={this.state.filter} />

        <ToDoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}
