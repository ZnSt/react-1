import { ReactComponent as IconDelete } from "../../icons/delete.svg";
import { IconButton } from "../IconButton";

export const Todo = ({ text, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <input type="checkbox" className="TodoList__checkbox" onClick={onToggleCompleted} />
      <p className="TodoList__text">{text}</p>
      {/* <button onClick={onDeleteTodo}>Удалить</button> */}
      <IconButton onClick={onDeleteTodo}>
        <IconDelete width="32" height="32" fill="white" />
      </IconButton>
    </>
  );
};
