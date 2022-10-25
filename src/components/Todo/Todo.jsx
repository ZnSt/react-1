export const Todo = ({ text, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <input type="checkbox" className="TodoList__checkbox" onClick={onToggleCompleted} />
      <p className="TodoList__text">{text}</p>
      <button onClick={onDeleteTodo}>Удалить</button>
    </>
  );
};
