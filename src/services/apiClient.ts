import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {},
});

export default apiClient;
export { CanceledError };
