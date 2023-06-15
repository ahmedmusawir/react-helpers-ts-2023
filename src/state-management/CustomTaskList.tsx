import { useContext } from "react";
import CustomTasksContext from "./contexts/CustomTasksContext";

interface Task {
  id: number;
  title: string;
}

const CustomTaskList = () => {
  const { tasks, dispatch } = useContext(CustomTasksContext);
  console.log({ tasks });
  console.log({ dispatch });

  return (
    <>
      <h3>Custom Task List</h3>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks?.map((task) => (
          <li key={task.id} className="list-group-item flex justify-between ">
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-error"
              //   onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CustomTaskList;
