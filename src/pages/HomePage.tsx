import { Container, Row, Box } from "../components/layouts";
import PostList from "../react-query/PostList";
import TodoForm from "../react-query/TodoForm";
import TodoList from "../react-query/TodoList";

const HomePage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h2>React Query</h2>
          <TodoForm />
          <TodoList />

          <hr />
        </Box>
        <Box className={"p-3"}>
          <h2>React Query w/ Params</h2>
          <PostList />
        </Box>
        <Box className={"p-3"}>
          <h2>React Query w/ Params</h2>
          <PostList />
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
