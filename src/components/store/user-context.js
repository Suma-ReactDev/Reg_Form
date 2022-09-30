import { createContext, useContext, useEffect, useState } from "react";
import http from '../http'
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
export const ContextProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [singleUSer, setSingleUser] = useState({
      "name":'',
      "email":'',
      "profession":'',
      "age":'',
      "gender":'',
      "date":''
  })
  const [singleUSerId, setSingleUserId] = useState(null)
//   const [userList, setUserList] = useState();  //pending: pass in userList
//   const createNewUser = async (value) => {
//     await http.post("/api/registers", value);
//     console.log(value);
//   };
  // const updateUser = async (userId, data) => {
  //   await http.put(`api/registers${userId}`, data);
  // };
  
//   const deleteUser = async (registerId) => {
//     await http.delete(`/api/registers/${registerId}`);
//   };
//   const updateUserList = (value) => {
//     setUserList(value);
//   };
//   
const getFormData = async () => {
  const response = await http.get('api/registers');
  // console.log(response.data.data)
  // const responseArr = Object.values(response.data.data);
  // console.log(response)
  const array=response.data.data;
  // console.log(array);
  setUsers(array);
  {array.map((arr)=>{
    setSingleUser(arr)
  })}
};
  useEffect(()=>{
     getFormData()
}, []);

  // Select the particular  user with id
    const selectUser = () => {

    }
const addFormData = async(values) =>{
  console.log(values)
  const data = JSON.stringify({
    "data":{
      "name":values.name,
      "email":values.email,
      "profession":values.profession,
      "age":values.age,
      "gender":values.gender,
      "date":new Date(values.doB)
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
  async function updateUser  (id) {
    const response = await fetch (`http://localhost:1337/api/registers/${id}`,
    {
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      }
    }
      )
      const result = await response.json();
      console.log(result)
      getFormData()
      if(!response){
        console.log(response)
      }
  }
  async function deleteUser  (id) {
    const response = await fetch (`http://localhost:1337/api/registers/${id}`,
    {
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }
      )
      const result = await response.json();
      console.log(result)
      getFormData()
      if(!response){
        console.log(response)
      }
  }
  const value = {
    addFormData,
    setUsers,
    users,
    updateUser,
    deleteUser
    
  };
  return(
    <UserContext.Provider value={value} >
      {children}
    </UserContext.Provider>
  )
}