import React, { useState } from 'react';
import TodoForm from './TodoForm';
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
