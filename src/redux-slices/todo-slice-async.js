import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: () => "/todos",
    }),

    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/todos",
        method: "POST",
        body: newTodo,
      }),
    }),

    removeTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodoListQuery,
  useAddTodoMutation,
  useRemoveTodoMutation,
} = apiSlice;
