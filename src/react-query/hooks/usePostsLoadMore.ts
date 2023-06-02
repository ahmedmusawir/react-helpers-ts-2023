import axios from "axios";
import { PostQueryLoadMore, Post } from "../../constants";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const usePostsPagination = (query: PostQueryLoadMore) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => {
          console.log("axios:", res.data);
          return res.data;
        }),
    staleTime: 10 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePostsPagination;
