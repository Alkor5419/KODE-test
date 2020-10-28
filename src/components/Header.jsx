import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../link.css';
import {mainPath, loginPath} from './constatns';

const HeaderWrap = styled.div`
margin: 20px 5em;
border: 2px solid #9f1aac;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 2em;
`;
const Header = props => {
        const unSubscribe = () =>{
                delete localStorage.login;
        }
        return <HeaderWrap>
                {(props.path !== mainPath)? <Link className='link' to = {mainPath}>Back</Link>: null}
                <Link className='link' to = {loginPath} onClick = {unSubscribe}>Logout</Link></HeaderWrap>
}

export default Header;