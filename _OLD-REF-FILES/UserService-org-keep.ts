import apiClient from "./apiClient";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: Number) {
    return apiClient.delete(`/users/${id}`);
  }

  createUser(user: User) {
    return apiClient.post(`/users`, {
      name: user.name,
    });
  }

  updateUser(user: User) {
    return apiClient.put(`/users/${user.id}`, user);
  }
}

export default new UserService();
