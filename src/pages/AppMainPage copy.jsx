import { useCallback, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodoList } from "@/redux-slices";

export const AppMainPage = () => {
  const { data, loading, error } = useSelector((state) => state?.["todo-list"]);

  const dispatch = useDispatch();

  const getTodoList = useCallback(
    () => dispatch(fetchTodoList()),
    [fetchTodoList]
  );

  const addNewTodo = useCallback(() => {
    dispatch(
      addTodo({
        id: data?.[data.length - 1]?.id + 1 || 0,
        completed: false,
        title: "test",
        userId: 1,
      })
    );
  }, [data]);

  useEffect(() => {
    getTodoList();
  }, []);

  if (loading) {
    return <h4>...loading</h4>;
  }

  if (error) {
    return (
      <>
        <h4>error</h4>
        <Button onClick={getTodoList}>reload data</Button>
      </>
    );
  }

  return (
    <Container className="pb-2">
      <h1>main page</h1>

      <hr />
      <Button onClick={addNewTodo}>ТЫК</Button>

      <ul>
        {data.map(({ id, title, completed }) => (
          <li>
            {id} | {title} | {completed ? "done" : "need to do"}
          </li>
        ))}
      </ul>
    </Container>
  );
};
