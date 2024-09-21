import { getTodoList } from "@/api";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchTodoList = createAsyncThunk(
  "todos/fetchTodos",
  async () => await getTodoList()
);

export const todoSlice = createSlice({
  name: "todo-list",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {
    addTodo: (state, action) => {
      return { ...state, data: [...state.data, action.payload] };
    },
    toggleTodo: (state, action) => {
      return {
        ...state,
        data: state.data.map((el) =>
          el.id === action.payload ? { ...el, status: !el.status } : el
        ),
      };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        data: [
          ...state.data,
          state.data.filter(({ id }) => id !== action.payload),
        ],
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {
      return { ...state, loading: true, error: false };
    });
    builder.addCase(fetchTodoList.rejected, (state) => {
      return { ...state, loading: false, error: true };
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      return { ...state, data: action.payload, loading: false, error: false };
    });
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

const selectTodo = (state) => state["todo-list"];

export const selectCompletedTodoList = createSelector(
  [selectTodo],
  (todoList) => todoList.data.filter(({ completed }) => !completed)
);
