import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BtnWrap, LoginInputs, LoginLabels, Window, Wrap } from '../LoginWindow';
import {Btn} from '../Button';
import {Error} from '../ErrorMessage'

const Login = (props) => {
  const [login, setLogin] = useState(null);
const [password, setPassword] = useState(null);
const [loginValue, setLoginValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [validate, setValidate] = useState(false);

const submit = (e) => {
   e.preventDefault();
   setLogin(loginValue);
   setPassword(passwordValue);
   if ((login === 'kode@kode.ru') && (password === 'Enk0deng')) {
      setValidate(true);
   }
   else {
      setValidate('Error')
   }
}
if (validate === true) return <Redirect to = '/message'/>;
   
   
   
   
   return <Wrap>
   <Window>
      <form onSubmit = {submit}>
      <LoginLabels >Login</LoginLabels>
      <LoginInputs value = {loginValue} type = 'text' onChange = {e => setLoginValue(e.target.value)}/>
      <LoginLabels >Password</LoginLabels>
      <LoginInputs value = {passwordValue} type = 'password' onChange = {e => setPasswordValue(e.target.value)}/>
   
        <BtnWrap>
        <Btn type = 'submit'>Submit</Btn>
        
        {(validate === 'Error') ? <Error>Ошибка</Error>: null}
        </BtnWrap>
      </form>
   </Window>
</Wrap>   
}

export default Login;