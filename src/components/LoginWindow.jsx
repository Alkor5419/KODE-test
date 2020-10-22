import React from 'react';
import css from 'styled-components';
import Button from './Button';

const Wrap = css.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100wh;
   height: 100vh;
   background-color:#333;
`;
const Window = css.div`
   border: 2px solid #9f1aac;
   border-radius: 5px;
   width: 400px;
   height: 40vh;
   padding: 20px 60px;
`;
const LoginLabels = css.label`
   width: 100%;
   display: block;
   margin-bottom: 15px;
   color:#fff;
`;
const LoginInputs = css.input`
   width:100%;
   margin-bottom: 30px;
   `;
const BtnWrap = css.div`
   margin-top: 80px;
   width: 100%;
   display: flex;
   align-items: center;  
   justify-content: center;
`;

const LoginWindow = (props) => {
const formItems = props.formItems.map(s => <div><LoginLabels >{s.label}</LoginLabels><LoginInputs type = {s.type}/></div>);
   return <Wrap>
      <Window>
         <form>
           {formItems}
           <BtnWrap>
            <Button />
           </BtnWrap>
         </form>
      </Window>
   </Wrap>
}

export default LoginWindow;