import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS, NewTodo, Todo } from "../../constants";
import APIClient from "../services/apiClient";

interface AddTodoContext {
  prevTodos: Todo[];
}

const apiClient = new APIClient<Todo, NewTodo>("/todos");

const useAddTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newTodo: NewTodo) => {
      console.log("Adding todo", newTodo);
      return apiClient.post(newTodo);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(CACHE_KEY_TODOS);
    },
  });
};

export default useAddTodos;
