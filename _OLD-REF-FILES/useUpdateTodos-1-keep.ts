import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS, NewTodo, Todo } from "../../constants";
import APIClient from "../services/apiClient";

interface UpdateTodoParams {
  id: number;
  updates: Partial<Todo>;
}

const apiClient = new APIClient<Todo, NewTodo>("/todos");

const useUpdateTodos = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: UpdateTodoParams) =>
      apiClient.patch(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEY_TODOS);
      // queryClient.refetchQueries(CACHE_KEY_TODOS);
    },
  });
};

export default useUpdateTodos;
