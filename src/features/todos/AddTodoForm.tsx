import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, TodoObject } from "./todosSlice";

export const AddTodoForm = () => {
  const [nextId, setNextId] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useDispatch();

  const onClickedAddTodo = () => {
    if(inputText !== ""){
      const newTodo: TodoObject = {
        id: nextId,
        content: inputText,
        isCompleted: false
      }
      dispatch(addTodo(newTodo));
      setNextId(nextId+1)
    }
  }
  
  return (
    <div>
      <form>
        <input type="text" onChange={e => {
          setInputText(e.target.value)
        }} />
        <button type="button" onClick={onClickedAddTodo}>add Todo</button>
      </form>
    </div>
  )
}