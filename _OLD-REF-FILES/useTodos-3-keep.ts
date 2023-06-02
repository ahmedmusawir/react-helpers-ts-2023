import { Todo, CACHE_KEY_TODOS, NewTodo } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo, NewTodo>("/todos?_limit=10");

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });

export default useTodos;
