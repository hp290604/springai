import React, { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";

function Users() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      // const response = axios.get("https://dummyjson.com/products")
      //               .then(response=>{
      //                 setTotal(response.data.total);
      //                 setLoading(false);
      //               })
      const date =Date.now();
      const resp = async()=>{
        const response = await axios.get("https://dummyjson.com/products");
        return response;
      }
      resp()
      
      .then(response=>{
        const elapsedTime = Date.now() - date;
        console.log(elapsedTime);
        setTotal(response.data.total);
        setLoading(false);
      });

    },1000);
    
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
    return <div><img src={reactLogo} alt="react logo" /></div>;
  }

  return (
    <div>
      <h2>Users List</h2>
      {total}
    </div>
  );
}

export default Users;