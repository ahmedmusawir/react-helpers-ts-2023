import axios from "axios";
import { PostQuery, Post } from "../../constants";
import { useQuery } from "@tanstack/react-query";

const usePostsPagination = (query: PostQuery) =>
  useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => {
          console.log("axios:", res.data);
          return res.data;
        }),
    staleTime: 10 * 1000,
    keepPreviousData: true,
  });

export default usePostsPagination;
