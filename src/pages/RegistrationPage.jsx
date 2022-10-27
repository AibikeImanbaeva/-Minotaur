import React, {useState} from 'react';
import { useAuth } from '../contexts/AuthContextProvider';
import Navbar from '../components/Navbar/Navbar'

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');


  const {register} = useAuth();

let newObj = {
  name: username,
  password: password
}
  function handleRegister(){
    register(newObj)
    setUsername('')
    setPassword('')
  }

  return (
    <> <Navbar />
        <h2>register form</h2>
    <input type="text" placeholder='username' value={username} onChange={e=> setUsername(e.target.value)}/>
    <input type="text" placeholder='password' value={password} onChange={e=> setPassword(e.target.value)}/>
    <button onClick={handleRegister}>register</button>
    </>

  )
}

export default RegistrationPage