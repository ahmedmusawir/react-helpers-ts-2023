import { useRef } from "react";
import useAddTodos from "./hooks/useAddTodos";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const idRef = useRef(10000);

  const getUniqueId = () => idRef.current++;

  const addTodo = useAddTodos();
  // const addTodo = useAddTodos(() => {
  //   if (ref.current) ref.current.value = "";
  // });

  return (
    <>
      {/* {addTodo.error && (
        <div className="alert alert- mb-4">{addTodo.error.message}</div>
      )} */}
      <form
        className="row mb-3 flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              // id: getUniqueId(),
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
            className="input input-primary mb-3 w-80"
          />
        </div>
        <div className="col">
          <button className="btn btn-primary w-28">
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
