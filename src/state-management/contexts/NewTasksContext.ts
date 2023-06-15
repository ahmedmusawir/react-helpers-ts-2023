import React from "react";
import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

interface NewTasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const NewTasksContext = React.createContext<NewTasksContextType>(
  {} as NewTasksContextType
);

export default NewTasksContext;
