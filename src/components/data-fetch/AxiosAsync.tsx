import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: string;
  name: string;
}

function AxiosAsync() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );

        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <p className="alert alert-info">xusers is used to create this error</p>
      {error && <p className="alert alert-error text-white">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AxiosAsync;
