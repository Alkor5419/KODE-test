import React from 'react'
import LoginWindow from '../LoginWindow';

const Message = props => {
   const initialState = [{label:'Login',type:'text'}];
   
   return <LoginWindow formItems = {initialState}/>
}

export default Message;