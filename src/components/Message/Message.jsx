import React from 'react'
import { useState } from 'react';
import { BtnWrap, LoginInputs, LoginLabels, Window, Wrap } from '../LoginWindow';
import {Btn} from '../Button';
import { Redirect } from 'react-router-dom';

const Message = props => {
   const [message, setMessage] = useState(null);
   const [messageValue, setMessageValue] = useState('');

   const submit = (e) => {
      e.preventDefault();
      setMessage(messageValue);
   }
   if (message === '123456') return <Redirect to = '/main' />;
   
   return <Wrap>
   <Window>
      <form onSubmit = {submit} >
      <LoginLabels >Code from SMS</LoginLabels>
      <LoginInputs type = 'text' value = {messageValue} onChange = {e => setMessageValue(e.target.value)}/>
      
   
        <BtnWrap>
        <Btn type = 'submit'>Submit</Btn>
        </BtnWrap>
      </form>
   </Window>
</Wrap>   
}

export default Message;