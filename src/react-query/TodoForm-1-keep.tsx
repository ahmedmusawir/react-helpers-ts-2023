import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../constants";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => {
          // console.log("axios:", res.data);
          return res.data;
        }),
    onSuccess: (savedTodo, newTodo) => {
      console.log(savedTodo);
      //Invalidate the cache. This will not work with Json placeholder cuz it's fake
      // queryClient.invalidateQueries({
      //   queryKey: ['todos']
      // })

      // APPROACH 2: UPDATING the data in cache directly
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);

      if (ref.current) ref.current.value = "";
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert- mb-4">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3 form-control"
        onSubmit={(e) => {
          e.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input
            ref={ref}
            type="text"
            className="input input-primary w-full mb-3"
          />
        </div>
        <div className="col">
          <button className="btn btn-primary">
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
