import { useContext, useReducer, useState } from "react";
import NewTasksContext from "./contexts/NewTasksContext";
import TasksContext from "./contexts/NewTasksContext";

const OtherList = () => {
  //   const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks, dispatch } = useContext(NewTasksContext);

  console.log({ tasks });
  return (
    <>
      <h3>Other List</h3>
      <span className="badge">{tasks.length}</span>

      <ul className="list-group">
        {tasks.map((task) => (
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

export default OtherList;
