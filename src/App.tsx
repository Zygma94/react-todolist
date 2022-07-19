import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { Routes, Route, NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

const initialTodos: TodoItem[] = [
  {
    text: 'Sacar la basura',
    complete: false,
    id: nanoid(),
  },
  {
    text: 'Desarrollar aplicación',
    complete: true,
    id: nanoid(),
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: TodoItem) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const editTodo = (selectedTodo: TodoItem) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          text: selectedTodo.text,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };


  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, id: nanoid() };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <header className='titulo'>
        <b>Lista de tareas</b>
      </header>
      <ul>
        <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} />
        <AddTodoForm addTodo={addTodo} />
      </ul>
    </div>
  );
}

export default App;
