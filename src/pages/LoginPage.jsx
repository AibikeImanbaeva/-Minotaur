import React, {useState} from 'react';
import { useAuth } from '../contexts/AuthContextProvider';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');


  const {login} = useAuth();
  const {checkAuth} = useAuth()

let newObj = {
  name: username,
  password: password
}
  function handleLogin(){
    login(newObj)
    checkAuth(newObj)
    setUsername('')
    setPassword('')


  }

  return (
    <>
        <h2>login form</h2>
    <input type="text" placeholder='username' value={username} onChange={e=> setUsername(e.target.value)}/>
    <input type="text" placeholder='password' value={password} onChange={e=> setPassword(e.target.value)}/>
    <button onClick={handleLogin}>login</button>
    </>

  )
}

export default LoginPage