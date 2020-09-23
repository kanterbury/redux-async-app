import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


 export interface Todo {
  id: number,
  content: string,
  isCompleted: boolean,
}



const initialState: Todo[] = [
    {
      id: 0,
      content: "This is a first content",
      isCompleted: true,
    },
    {
      id: 1,
      content: "This is a second content",
      isCompleted: false,
    }
]

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      return [...state, action.payload]
    }
  }
});

export const { addTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;