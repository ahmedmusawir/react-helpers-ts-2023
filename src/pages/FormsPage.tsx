import FormRef from "../components/forms/FormRef";
import FormState from "../components/forms/FormState";
import FormHook from "../components/forms/FormHook";
import FormZod from "../components/forms/FormZod";
import { Container, Row, Box } from "../components/layouts";

const FormsPage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h1 className="h1">Form Ref:</h1>
          <FormRef />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Form State:</h1>
          <FormState />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Form Hook Form:</h1>
          <FormHook />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Form w/ Zod:</h1>
          <FormZod />
          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default FormsPage;
