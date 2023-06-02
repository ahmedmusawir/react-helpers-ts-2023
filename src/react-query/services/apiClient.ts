import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3500",
  // THE FOLLOWING WILL NOT WORK
  // baseURL: "https://jsonplaceholder.typicode.com",
});

interface IIdentifiable {
  id: number;
}

class APIClient<T extends IIdentifiable, U> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: U) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  patch = (id: number, updates: Partial<T>) => {
    return axiosInstance
      .patch<T>(`${this.endpoint}/${id}`, updates)
      .then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance
      .delete(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
