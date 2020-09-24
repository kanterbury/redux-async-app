import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


 export interface TodoObject {
  id: string,
  content: string,
  isCompleted: boolean,
}

 export interface TodosStateObject {
   todos: TodoObject[],
   status: 'idle' | 'loading' | 'succeeded' | 'failed',
   error: string | null,
 }

const initialState: TodosStateObject = {
  todos: [],
  status: "idle",
  error: null
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoObject>) => {
      state.todos = [...state.todos, action.payload]
    },
    addTodos: (state, action: PayloadAction<TodoObject[]>) => {
      state.todos = [...state.todos, ...action.payload]
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo =>
        (todo.id === action.payload)
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      )
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const deleteTargetTodo = state.todos.findIndex(todo => todo.id === action.payload);
      console.log(deleteTargetTodo);
      state.todos.splice(deleteTargetTodo, 1)
    },
    fetchTodo: (state) => {
      fetch("/api/todos")
        .then(res => res.json())
        .then(json => {
          state.todos = json.todos;
        })
        .catch(e => {
          console.error(e.message);
        })
    }
  }
});

export const { addTodo, addTodos, toggleTodo, deleteTodo, fetchTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;