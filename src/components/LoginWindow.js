import css from 'styled-components';

export const Wrap = css.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100wh;
   height: 100vh;
   background-color:#333;
`;
export const Window = css.div`
   border: 2px solid #9f1aac;
   border-radius: 5px;
   width: 400px;
   height: 40vh;
   padding: 20px 60px;
`;
export const LoginLabels = css.label`
   width: 100%;
   display: block;
   margin-bottom: 15px;
   color:#fff;
`;
export const LoginInputs = css.input`
   width:100%;
   margin-bottom: 30px;
   `;
export const BtnWrap = css.div`
   margin-top: 80px;
   width: 100%;
   display: flex;
   align-items: center;  
   justify-content: center;
`;