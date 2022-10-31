import React, {useState} from 'react';
import { useAuth } from '../contexts/AuthContextProvider';
import Navbar from '../components/Navbar/Navbar'


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

  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);


  const soldCheckbox = ({ target: { checked } }) => {
    setSignIn(checked);
  };
  const soldCheckboxY = ({ target: { checked } }) => {
    setSignUp(checked);
  };

  return (
    <>
    <Navbar/>
          <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked={signIn} onChange={soldCheckbox} /><label htmlFor="tab-1" className="tab">Логин</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up" checked={signUp} onChange={soldCheckboxY} /><label htmlFor="tab-2" className="tab"></label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label htmlFor="user" className="label" >Имя</label>
					<input id="user" type="text" className="input" value={username} onChange={e=> setUsername(e.target.value)}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label" >Пароль</label>
					<input id="pass" type="password" className="input" data-type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
				</div>
        <div className="hr"></div>
				<div className="group">
					<button className="button"  onClick={handleLogin}>Войти</button>
		  </div>
    </div>
    </div>
	</div>
</div>
    </>

  )
}

export default LoginPage