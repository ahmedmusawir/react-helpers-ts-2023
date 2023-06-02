import { Container, Row, Box } from "../components/layouts";
import PostList from "../react-query/PostList";
import PostListLoadMore from "../react-query/PostListLoadMore";
import PostListPagination from "../react-query/PostListPagination";
import TodoForm from "../react-query/TodoForm";
import TodoList from "../react-query/TodoList";

const HomePage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h2>React Query w/ Mutation</h2>
          <TodoForm />
          <TodoList />

          <hr />
        </Box>
        <Box className={"p-3"}>
          <h2>React Query w/ Params</h2>
          <PostList />
        </Box>
        <Box className={"p-3"}>
          <h2>React Query w/ Pagination</h2>
          <PostListPagination />
        </Box>
        <Box className={"p-3"}>
          <h2>React Query w/ Loadmore</h2>
          <PostListLoadMore />
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
