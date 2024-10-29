import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos, addTodo, editTodo, deleteTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div className="todo-list">
      <div className="todo-input">
        <input
          type="text"
          value={input}
          placeholder="Enter a new todo..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
