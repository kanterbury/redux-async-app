import React from 'react'
import { useDispatch } from 'react-redux';
import { 
  TodoObject,
  toggleTodo,
  deleteTodo
} from "./todosSlice";

 const Todo: React.FC<TodoObject> = (props) => {
  const dispatch = useDispatch();
  return(
    <div>
      <li
      onClick={() => dispatch(toggleTodo(props.id))}
      style={{
        textDecoration: props.isCompleted ? 'line-through' : 'none'
      }}
    >
      {props.content}
    </li>
    <button type="button" onClick={() => dispatch(deleteTodo(props.id))}>Delete</button>
    </div>
    
  )
}

export default Todo