import axios from "axios";
import { Post } from "../../constants";
import { useQuery } from "@tanstack/react-query";

function usePosts() {
  const fetchTodos = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        console.log("axios:", res.data);
        return res.data;
      });

  return useQuery<Post[], Error>({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
    staleTime: 10 * 1000,
  });
}

export default usePosts;
