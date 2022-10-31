import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);


const API = " http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [adminBtn, setAdminBtn] = useState(false)

  const navigate = useNavigate();

  const register = async (userObj) => {
    let res = await axios.post(API, userObj);
    console.log(res);
    navigate("/login");
  };

  const login = async (username, password) => {
    try {

       let res = await axios(API);
       res.data.find((item)=> {
 
        if (username.name === item.name) {
          navigate("/");
          localStorage.setItem("username", JSON.stringify(username, password));
          checkAdmin()
          setUser(username);    
          return
        }
       })
     alert('Пользователь не найден! Зарегистрируйтесь, пожалуйста!')
      
    } catch (error) {
   
      setError("hvfkjlkc", error);
    }
  };

  const checkAuth = async (obj) => {
    try {
      
      checkAdmin(obj)
    } catch (error) {
      console.log(error);
      setError("hvfkjlkc", error);
    }
  };
  
 
  function checkAdmin (obj){
    if (obj.name !== "admin" && obj.password !== "admin") {
      console.log("You're not admin")
      setAdminBtn(false)
      return
    }
    setAdminBtn(true)
  }


  

  
  function logout(){
    axios.delete("username");
    axios.delete("admin")
    setUser('')
    navigate('/');
  };

  return (
    <authContext.Provider
      value={{
        user,
        error,
        register,
        login,
        checkAuth,
        adminBtn,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
