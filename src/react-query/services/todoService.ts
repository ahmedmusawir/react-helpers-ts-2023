import { NewTodo, Todo } from "../../constants";
import APIClient from "../services/apiClient";

export default new APIClient<Todo, NewTodo>("/todos");
// export default new APIClient<Todo, NewTodo>("/todos/?_limit=10");
