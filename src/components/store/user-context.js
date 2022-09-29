import { createContext, useContext, useEffect, useState } from "react";
import http from '../http'
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
export const ContextProvider = ({children}) => {
  const [users, setUsers] = useState("");
//   const [userList, setUserList] = useState();  //pending: pass in userList
  const [userId, setUserId] = useState("");
//   const createNewUser = async (value) => {
//     await http.post("/api/registers", value);
//     console.log(value);
//   };
  const updateUser = async (userId, data) => {
    await http.put(`api/registers${userId}`, data);
  };
  const getUserId = (id) => {
    setUserId(id)
  }
//   const deleteUser = async (registerId) => {
//     await http.delete(`/api/registers/${registerId}`);
//   };
//   const updateUserList = (value) => {
//     setUserList(value);
//   };
//   
  useEffect(()=>{
    const getFormData = async () => {
        const response = await http.get('api/registers');
        // console.log(response.data.data)
        // const responseArr = Object.values(response.data.data);
        // console.log(response)
        // console.log(responseArr)
        setUsers(response.data.data);
    };
    return getFormData;
}, []);
const addFormData = async(values) =>{
  console.log(values)
  const data = JSON.stringify({
    "data":{
      "name":values.name,
      "email":values.email,
      "profession":values.profession,
      "age":values.age,
      "gender":values.gender
    }
  })
    const response = await fetch('http://localhost:1337/api/registers',
  {
    method:'POST',
    body: (data),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  // if(!response){
  //   console.log(response)
  // }
  // const resData = await response.json();	
  // console.log(resData);
  }
  const value = {
    addFormData,
    setUsers,
    users,
    updateUser,
    userId,
    getUserId
  };
  return(
    <UserContext.Provider value={value} >
      {children}
    </UserContext.Provider>
  )
}