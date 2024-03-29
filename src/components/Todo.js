import React from "react";
function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          color: "black",
          textDecoration: todo.completed ? "line-through" : null,
          listStyleType: "none",
        }}
      >
        {todo.task}
      </li>
      <button
        style={{
          marginLeft: "10px",
          marginBottom: "10px",
        }}
        onClick={handleRemoveClick}
      >
        X
      </button>
    </div>
  );
}

export default Todo;
