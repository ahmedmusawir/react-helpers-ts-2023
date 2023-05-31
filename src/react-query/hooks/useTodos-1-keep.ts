import axios from "axios";
import { Todo } from "../../constants";
import { useQuery } from "@tanstack/react-query";

function useTodos() {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        console.log("axios:", res.data);
        return res.data;
      });

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
    staleTime: 10 * 1000,
  });
}

export default useTodos;
