import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../../constants";
import todoService from "../services/todoService";

const useDeleteTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return todoService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEY_TODOS);
      // queryClient.refetchQueries(CACHE_KEY_TODOS);
    },
  });
};

export default useDeleteTodos;
