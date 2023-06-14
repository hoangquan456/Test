import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') return;
    addTodo(title);
    setTitle('');
  };
  const hanldeInput =(e)=>{
    setTitle(e.target.value);
    console.log(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={title}
        onChange={hanldeInput}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
