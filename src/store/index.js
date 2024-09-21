import { todoReducer, todoLocalReducer, apiSlice } from "@/redux-slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    "todo-list": todoReducer,
    "todo-list-local": todoLocalReducer,
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
