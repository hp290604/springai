import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <TOKEN>'
    }
});
// export default api;
api.interceptors.request.use((request)=>
    {
    return request;
},
(error)=>{
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
}
)


// api.interceptors.response.use((response)=>{

//     return response;
// },
// (error)=>{
//     console.error("Error in response interceptor:", error);
//     return Promise.reject(error);
// })
export default api;
