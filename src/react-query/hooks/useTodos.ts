import { Todo, CACHE_KEY_TODOS } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todoService";

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () =>
      todoService.getAll().then(
        // This line sorts your todos by id in descending order.
        (todos) => todos.sort((a, b) => b.id - a.id).slice(0, 10)
      ),
    staleTime: 10 * 1000,
  });

export default useTodos;
