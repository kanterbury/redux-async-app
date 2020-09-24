import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoThunkAction } from "./todosSlice";

export const AddTodoForm = () => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useDispatch();

  const onClickedAddTodo = () => {
    if(inputText !== ""){
      dispatch(addTodoThunkAction(inputText));
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