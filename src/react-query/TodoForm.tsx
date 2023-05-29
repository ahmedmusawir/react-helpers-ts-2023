import { useRef } from "react";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form className="row mb-3 form-control">
      <div className="col">
        <input
          ref={ref}
          type="text"
          className="input input-primary w-full mb-3"
        />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
