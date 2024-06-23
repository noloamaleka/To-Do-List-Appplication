import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'; 
import './Todo.css'; 

const Todo = () => {
const [todos, setTodos] = useState([]); //The initial value of items made into an array

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => {
 setTodos(data);
     })
    .catch((error) => {
    console.error('Cannot fetch data:', error);
    });
}, []);

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} /> 
            ))}
        </div>
    );
};

export default Todo;
