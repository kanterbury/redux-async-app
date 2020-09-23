import React from 'react'
import { useSelector } from 'react-redux';
import { selectTodos } from "./todosSlice";

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      { todos.map(todo => 
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        <li>{todo.content}</li>
      )}
    </ul>
  )
}