import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)} className="todo-task">
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        ✖
      </button>
    </li>
  );
};

export default TodoItem;
