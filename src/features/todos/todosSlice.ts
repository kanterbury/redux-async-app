import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
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
      return {
        todos: [...action.payload],
        status: "succeeded",
        error: null
      }
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
      state.todos.splice(deleteTargetTodo, 1)
    },
    fetchStart: (state) => {
      return {
        ...state,
        status: 'loading'
      }
    },
    fetchError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload
      }
    },
  }
});

export const { addTodo, addTodos, toggleTodo, deleteTodo, fetchStart, fetchError } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;
export const todosStatus = (state: RootState) => state.todos.status;

export default todosSlice.reducer;

export const fetchTodosThunkAction = () => (dispatch: Dispatch) => {
  dispatch(fetchStart());
  fetch("/api/fetchTodos")
    .then(res => res.json())
    .then(json => {
      // 成功したので addTodos をdispatchする
      dispatch(addTodos(json.todos));
    })
    .catch(e => {
      // 失敗したので何かをdispatchする
      dispatch(fetchError(e.message))
    })
}

export const addTodoThunkAction = (content: string) => (dispatch: Dispatch) => {
  fetch("/api/addTodo", {
    method: "POST",
    body: JSON.stringify({
      content: content,
    }),
  })
  .then(res => res.json())
  .then(json => {
    dispatch(addTodo(json));
  })
  .catch(e => {
    console.log(e.message);
    dispatch(fetchError(e.message));
  })
}