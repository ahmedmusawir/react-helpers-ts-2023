import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS, NewTodo } from "../../constants";
import todoService from "../services/todoService";

const useAddTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newTodo: NewTodo) => {
      console.log("Adding todo", newTodo);
      return todoService.post(newTodo);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(CACHE_KEY_TODOS);
    },
  });
};

export default useAddTodos;
