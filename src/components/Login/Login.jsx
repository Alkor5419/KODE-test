import React, { useState } from 'react'
import LoginWindow from '../LoginWindow';

const Login = (props) => {
   const initialState = [
      {label:'Login',type:'text'},
      {label: 'Password',type: 'password'}
   ]
   
   return <LoginWindow formItems = {initialState}/>    
}

export default Login;