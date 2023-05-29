import create from "./HttpService";

export interface User {
  id: number;
  name: string;
}

export default create("/users");
