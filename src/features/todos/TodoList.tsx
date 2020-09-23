import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectTodos, TodoObject } from "./todosSlice";
import Todo from "./Todo";

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
      .catch(e => {
        console.error(e.message);
      })
    });

  return (
    <ul>
      { todos.map(todo => 
        <Todo key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} />
      )}
    </ul>
  )
}