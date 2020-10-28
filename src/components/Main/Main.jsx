import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import styled from 'styled-components';
import Cards from './Cards';
import Filters from './Filters';
import Header from '../Header';
import { Redirect } from 'react-router-dom';
import {loginPath} from '../constatns';

const Wrap = styled.div`
   position: absolute;
   top: 0;
	left: 0;
   width: 100%;
   background-color:#333;
   min-height:100vh;
`;
const MainContainer = styled.div`
   display:flex;
   width: 100%;
`;

const Main = props => {
   const [pokemons, setPokemons] = useState(null);
   const path = props.location.pathname;

   useEffect(() => {
      axios.get('https://api.pokemontcg.io/v1/cards')
      .then(response => {
         setPokemons(response.data.cards);
         
         
         console.log(response.data);
         console.log('Pokemons ',pokemons )
      })
      .catch(err => console.log(err))
   }, [])
   console.log('Pokemons ',pokemons )
   if (!localStorage.login) return <Redirect to = {loginPath} />;

   return <Wrap>
      <Header path = {path}/>
      <MainContainer>
         <Filters />
         <Cards pokemons = {pokemons} />
      </MainContainer>
   </Wrap>
}

export default Main;