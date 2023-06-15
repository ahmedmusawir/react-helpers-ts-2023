import React from "react";
import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const CustomTasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default CustomTasksContext;
