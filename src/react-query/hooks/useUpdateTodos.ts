import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS, UpdateTodoParams } from "../../constants";
import todoService from "../services/todoService";

const useUpdateTodos = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: UpdateTodoParams) =>
      todoService.patch(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEY_TODOS);
      // queryClient.refetchQueries(CACHE_KEY_TODOS);
    },
  });
};

export default useUpdateTodos;
