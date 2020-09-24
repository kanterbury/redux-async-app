import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, todosStatus, fetchTodosThunkAction } from "./todosSlice";
import Todo from "./Todo";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const status = useSelector(todosStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === "idle"){
      dispatch(fetchTodosThunkAction());
    }
  },[dispatch, status]);
  

  return (
    <ul>
      { todos.map(todo => 
        <Todo key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} />
      )}
    </ul>
  )
}