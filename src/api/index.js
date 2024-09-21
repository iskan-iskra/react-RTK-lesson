import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTodoList = () =>
  httpClient.get("/todos/").then((res) => res.data);
