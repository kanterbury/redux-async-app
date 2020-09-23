import React from 'react';
// import { Counter } from './features/counter/Counter';
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
