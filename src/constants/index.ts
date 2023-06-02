export const CACHE_KEY_TODOS = ["todos"];

// NewTodo type
export interface NewTodo {
  title: string;
  completed: boolean;
  userId: number;
}

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostQuery {
  page: number;
  pageSize: number;
}

export interface PostQueryLoadMore {
  pageSize: number;
}

// FOR USE UPDATE TODOS

export interface UpdateTodoParams {
  id: number;
  updates: Partial<Todo>;
}
