import AddData from "../components/data-fetch/AddData";
import ApiClientUsage from "../components/data-fetch/api-client-fetch/ApiClientUsage";
import AxiosAsync from "../components/data-fetch/AxiosAsync";
import AxiosPromise from "../components/data-fetch/AxiosPromise";
import DeleteData from "../components/data-fetch/DeleteData";
import UpdateData from "../components/data-fetch/UpdateData";
import { Container, Row, Box } from "../components/layouts";

const DataFetchPage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h2>Get Data: axios promise</h2>
          <AxiosPromise />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h2>Get Data: axios async</h2>
          <AxiosAsync />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h2>Delete Data</h2>
          <DeleteData />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h2>Create Data</h2>
          <AddData />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h2>Update Data</h2>
          <UpdateData />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h2>API Client Usage: axios</h2>
          <ApiClientUsage />
          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default DataFetchPage;
