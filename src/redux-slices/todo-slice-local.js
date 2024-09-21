import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todoList = createEntityAdapter();

const initialState = todoList.getInitialState();

const todoSliceLocal = createSlice({
  name: "todo-list-local",
  initialState,
  reducers: {
    addTodo: todoList.addOne,
    updateTodo: todoList.updateOne,
    removeTodo: todoList.removeOne,
  },
});

export const { selectAll: selectTodoList } = todoList.getSelectors(
  (state) => state["todo-list-local"]
);

export const { addTodo, removeTodo, updateTodo } = todoSliceLocal.actions;

export default todoSliceLocal.reducer;
