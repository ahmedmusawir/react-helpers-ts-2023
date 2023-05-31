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
