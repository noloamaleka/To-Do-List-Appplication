import React from 'react';
import './Todo.css';

const TodoItem = ({ todo }) => {
const todoClass = todo.completed ? 'todo-item completed' : 'todo-item not-completed';

    return (
        <div className={todoClass}>
            <p>User ID: {todo.userId}</p>
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
    );
};

export default TodoItem;

