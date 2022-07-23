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
    <div className='area-app'>
      <header className='titulo'>
        <b>LISTA DE TAREAS</b>
      </header>
      <main>
        <Routes>
          <Route path='' element={
            <ul>
              <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} />
              <AddTodoForm addTodo={addTodo} />
            </ul>
          } />
          <Route path='/completadas' element={
            <ul>
              <TodoList todos={todos.filter((todo)=>todo.complete)} toggleTodo={toggleTodo} editTodo={editTodo} />
              <AddTodoForm addTodo={addTodo} />
            </ul>
          } />
          <Route path='/en-progreso' element={
            <ul>
              <TodoList todos={todos.filter((todo)=>!todo.complete)} toggleTodo={toggleTodo} editTodo={editTodo} />
              <AddTodoForm addTodo={addTodo} />
            </ul>
          } />
        </Routes>
        <NavLink to='' className='nav-link'>Todas</NavLink>
        <NavLink to='/completadas' className='nav-link'>Completadas</NavLink>
        <NavLink to='/en-progreso' className='nav-link'>En progreso</NavLink>
      </main>
    </div>
  );
}

export default App;
