import React from 'react'
import { useSelector } from 'react-redux';
import { selectTodos } from "./todosSlice";
import Todo from "./Todo";

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      { todos.map(todo => 
        <Todo key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} />
      )}
    </ul>
  )
}