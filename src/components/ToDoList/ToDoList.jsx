import React from "react";

export const ToDoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button onCLick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};
