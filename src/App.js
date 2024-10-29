import React, { useState } from "react";
import TodoList from "./TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, isEditing: false };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText, isEditing: false } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList todos={todos} addTodo={addTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
