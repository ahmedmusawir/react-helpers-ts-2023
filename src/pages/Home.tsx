import AddData from "../components/data-fetch/AddData";
import ApiClientUsage from "../components/data-fetch/api-client-fetch/ApiClientUsage";
import AxiosAsync from "../components/data-fetch/AxiosAsync";
import AxiosPromise from "../components/data-fetch/AxiosPromise";
import DeleteData from "../components/data-fetch/DeleteData";
import UpdateData from "../components/data-fetch/UpdateData";
import { Container, Row, Box } from "../components/layouts";

const HomePage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h2>Start here</h2>

          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
