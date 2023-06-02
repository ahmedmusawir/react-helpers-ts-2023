import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS, NewTodo, Todo } from "../../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo, NewTodo>("/todos");

const useDeleteTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      // console.log("ID in del hook", id);
      return apiClient.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEY_TODOS);
      // queryClient.refetchQueries(CACHE_KEY_TODOS);
    },
  });
};

export default useDeleteTodos;
