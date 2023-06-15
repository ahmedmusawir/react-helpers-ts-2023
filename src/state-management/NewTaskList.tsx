import { useContext, useReducer, useState } from "react";
import NewTasksContext from "./contexts/NewTasksContext";
import TasksContext from "./contexts/NewTasksContext";
import newTasksReducer from "./reducers/newTasksReducer";

interface Task {
  id: number;
  title: string;
}

const TaskList = () => {
  //   const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks, dispatch } = useContext(NewTasksContext);

  return (
    <>
      <h3>NEW Task List</h3>
      <button
        onClick={() =>
          //   setTasks([{ id: Date.now(), title: "Task " + Date.now() }, ...tasks])
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "New Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
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

export default TaskList;
