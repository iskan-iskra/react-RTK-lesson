import {
  removeTodoLocal,
  selectTodoListLocal,
  updateTodoLocal,
  addTodoLocal,
} from "@/redux-slices";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const AppSecondPage = () => {
  const dispatch = useDispatch();

  const todoList = useSelector(selectTodoListLocal);

  const addTodoHandler = () => {
    const newTodo = {
      id: todoList?.[todoList.length - 1]?.id + 1 || 0,
      title: "test",
      status: false,
    };

    dispatch(addTodoLocal(newTodo));
  };

  const toggleTodoHanddler = (id, currentStatus) => {
    dispatch(
      updateTodoLocal({
        id,
        changes: { status: !currentStatus },
      })
    );
  };

  const deleteTodoHandler = (id) => {
    dispatch(removeTodoLocal(id));
  };

  return (
    <Container className="pb-2">
      <h1>second page</h1>
      <Button onClick={addTodoHandler}>add new todo</Button>
      <hr />

      <ul>
        {todoList.map(({ id, title, status }) => (
          <li key={id}>
            {id} | {title} | {status ? "done" : "undone"}
            <Button onClick={() => toggleTodoHanddler(id, status)}>
              change status
            </Button>
            <Button onClick={() => deleteTodoHandler(id)}>delete</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
