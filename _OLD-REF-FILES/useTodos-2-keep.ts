import axios from "axios";
import { Todo, CACHE_KEY_TODOS, NewTodo } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo, NewTodo>("/todos");

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () =>
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res) => {
          console.log("axios:", res.data);
          return res.data;
        }),
    staleTime: 10 * 1000,
  });

export default useTodos;
