import css from 'styled-components';

export const Btn = css.button`
   width: 170px;
   height: 50px;
   background-color: #444141;
   color:#fff;
   border: 2px solid #9f1aac;
   border-radius: 3px;
   font-size: 16px;
   text-transform: uppercase;
   transition: background-color .2s, color .2s;
   &:hover{
      background-color:#fff;
      color:#9f1aac;
   }
`;
