import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const startTime = Date.now();

  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );

  //     const elapsedTime = Date.now() - startTime;
  //     const remainingTime = 1000 - elapsedTime;

  //     // Ensure loader shows at least 1 second
  //     setTimeout(() => {
  //       setUsers(response.data);
  //       setLoading(false);
  //     }, remainingTime > 0 ? remainingTime : 0);
  //   };

  //   fetchUsers();
  // }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;