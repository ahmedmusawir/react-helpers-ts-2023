import axios from "axios";
import { Post } from "../../constants";
import { useQuery } from "@tanstack/react-query";

const usePosts = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: ["users", userId, "posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10", {
          params: {
            userId,
          },
        })
        .then((res) => {
          console.log("axios:", res.data);
          return res.data;
        }),
    staleTime: 10 * 1000,
  });

export default usePosts;
