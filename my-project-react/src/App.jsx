import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const response = axios.get("https://dummyjson.com/products")
                    .then(response=>{
                      setTotal(response.data.total);
                      setLoading(false);
                    })
  }, []);
    // const product = axios.post('https://dummyjson.com/products/add',{title:'product initialised'})
                  // .then(response => console.log(response.data));

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
      {total}
    </div>
  );
}

export default Users;