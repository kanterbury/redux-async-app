import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodoForm } from './features/todos/AddTodoForm';
import { TodoList } from './features/todos/TodoList'
import { fetchTodosThunkAction } from "./features/todos/todosSlice";
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosThunkAction());
  },[dispatch]);

  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
