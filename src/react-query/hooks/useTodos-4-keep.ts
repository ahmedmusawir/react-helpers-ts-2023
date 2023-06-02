import { Todo, CACHE_KEY_TODOS } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todoService";

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });

export default useTodos;
