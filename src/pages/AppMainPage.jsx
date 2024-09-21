import { useGetTodoListQuery } from "@/redux-slices";
import { Button, Container } from "react-bootstrap";

export const AppMainPage = () => {
  const { isError, isLoading, data, refetch } = useGetTodoListQuery();

  if (isLoading) {
    return <h4>...loading</h4>;
  }

  if (isError) {
    return (
      <>
        <h4>error</h4>
        <Button onClick={refetch}>reload data</Button>
      </>
    );
  }

  return (
    <Container className="pb-2">
      <h1>main page</h1>

      <hr />

      <ul>
        {data.map(({ id, title, completed }) => (
          <li key={id}>
            {id} | {title} | {completed ? "done" : "need to do"}
          </li>
        ))}
      </ul>
    </Container>
  );
};
