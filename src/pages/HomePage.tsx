import { useReducer } from "react";
import { Box, Container, Row } from "../components/layouts";
import ComponentOne from "../state-management/ComponentOne";
import ItemContext from "../state-management/contexts/ItemsContext";
import NewTasksContext from "../state-management/contexts/NewTasksContext";
import CustomTaskList from "../state-management/CustomTaskList";
import ItemList from "../state-management/ItemList";
import NewTaskList from "../state-management/NewTaskList";
import OtherList from "../state-management/OtherList";
import AuthProvider from "../state-management/provider/AuthProvider";
import CustomProvider from "../state-management/provider/CustomProvider";
import customTasksReducer from "../state-management/reducers/customTasksReducer";
import itemsReducer from "../state-management/reducers/itemsReducer";
import TaskList from "../state-management/TaskList";
import Counter from "../state-management/zustand/Counter";
import LoginStatus from "../state-management/zustand/LoginStatus";

const HomePage = () => {
  // const { tasks, dispatch } = useContext(TasksContext);
  // THE FOLLOWING LINE IS FOR CONTEXT (2ND BLOCK)
  // const [tasks, dispatch] = useReducer(newTasksReducer, []);
  const [tasks, dispatch] = useReducer(customTasksReducer, []);
  // const [items, itemsDispatch] = useReducer(itemsReducer, []); // DON'T DELETE

  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h2>React Reducers</h2>
          <h5 className="p-5">* Basic Task Reducer Implementation</h5>
          <TaskList />
          <hr />
        </Box>
        <NewTasksContext.Provider value={{ tasks, dispatch }}>
          <Box className={"p-3"}>
            <h2>React Context</h2>
            <h5 className="p-5">
              * Raw Context Implementation shows state sharing between
              NewTaskList and OtherList
            </h5>

            <NewTaskList />
            <OtherList />
            <hr />
          </Box>
        </NewTasksContext.Provider>
        <AuthProvider>
          {/* <ItemContext.Provider value={{ items, itemsDispatch }}> */}
          <CustomProvider>
            <Box className={"p-3"}>
              <h2>Custom Context Provider</h2>
              <h5 className="p-5">
                * Shows custom context CustomProvider implementation with new
                Items state. Also AuthProvider was implemented
              </h5>

              <ComponentOne />
              <ItemList />
              <hr />
            </Box>
          </CustomProvider>
          {/* </ItemContext.Provider> */}
        </AuthProvider>
        <Box className={"p-3"}>
          <h2>Zustand</h2>
          <Counter />
          <LoginStatus />
          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
