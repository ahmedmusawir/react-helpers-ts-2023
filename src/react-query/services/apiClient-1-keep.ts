import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3500",
  // baseURL: "https://jsonplaceholder.typicode.com",
});

interface IIdentifiable {
  id: number;
}

class APIClient<T extends IIdentifiable> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  patch = (data: T) => {
    return axiosInstance.patch<T>(this.endpoint, data).then((res) => res.data);
  };

  // delete = (data: T) => {
  //   console.log("apiClient DELETE");
  //   return axiosInstance
  //     .delete<T>(`${this.endpoint}/${data.id}`)
  //     .then((res) => res.data);
  // };

  delete = (id: number) => {
    return axiosInstance
      .delete(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
