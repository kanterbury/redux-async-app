import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { addTodo, TodoObject } from "./todosSlice";

export const AddTodoForm = () => {
  const [nextId, setNextId] = useState<number>(2);
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useDispatch();

  const onClickedAddTodo = () => {
    if(inputText !== ""){
      const newTodo: TodoObject = {
        id: nanoid(),
        content: inputText,
        isCompleted: false
      }
      dispatch(addTodo(newTodo));
      setNextId(nextId+1);
      setInputText("");
    }
  }
  
  return (
    <div>
      <form>
        <input 
          type="text"
          id="addTodoForm" 
          onChange={e => {setInputText(e.target.value)}} 
          value={inputText}
        />
        <button type="button" onClick={onClickedAddTodo}>add Todo</button>
      </form>
    </div>
  )
}