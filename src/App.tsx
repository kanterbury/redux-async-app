import React from 'react';
import { AddTodoForm } from './features/todos/AddTodoForm';
import { TodoList } from './features/todos/TodoList'
import './App.css';

function App() {

  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
