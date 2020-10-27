import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        
        return <HeaderWrap>
                {(props.path !== '/main')? <Link to = '/main'>Back</Link>: null}
                <Link to = '/'>Logout</Link></HeaderWrap>
}

export default Header;