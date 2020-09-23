import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


 export interface TodoObject {
  id: string,
  content: string,
  isCompleted: boolean,
}



const initialState: TodoObject[] = [
    {
      id: nanoid(),
      content: "This is a first content",
      isCompleted: true,
    },
    {
      id: nanoid(),
      content: "This is a second content",
      isCompleted: false,
    }
]

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoObject>) => {
      return [...state, action.payload]
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      return state.map(todo =>
        (todo.id === action.payload)
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      )
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const deleteTargetTodo = state.findIndex(todo => todo.id === action.payload);
      console.log(deleteTargetTodo);
      state.splice(deleteTargetTodo, 1)
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;