import React, { useEffect, useState } from 'react'
import * as axios from 'axios';
import styled from 'styled-components';
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

const Img = styled.img`
   max-height: 50vh;
   
`;
const Container = styled.div`
display: flex;
justify-content: center;
`;
const Subtitle = styled.h3`
   color:#fff;
`;
const Features = styled.div`
margin-left: 200px;
`;
const Text = styled.p`
color:#fff;
margin: 2em 5em 0;
font-size: 24px;
`;
const Pokemon = props => {
   const [pokemon, setPokemon] = useState(null);
   const path = props.location.pathname;
   const id = path.split('/');

   useEffect(() => {
      axios.get(`https://api.pokemontcg.io/v1/cards/${id[3]}`)
      .then(response => {
         console.log(response.data);
         setPokemon(response.data.card);
      })
      .catch(err => console.log(err))
   }, [])

   if (!localStorage.login) return <Redirect to = {loginPath} />;

   return <Wrap>
      <Header path = {path}/>
      
         {pokemon ? 
         <Container>
         <Img src = {pokemon.imageUrlHiRes}/>
         <Features >
            <Subtitle>Name: {pokemon.name}</Subtitle>
            <Subtitle>Type: {pokemon.types[0]}</Subtitle>
            <Subtitle>Subtype: {pokemon.subtype}</Subtitle>
            <br />
            <Subtitle>Damage: {pokemon.attacks[0].damage}</Subtitle>
            <Subtitle>Cost: {pokemon.attacks[0].cost[0]}</Subtitle>
            <Subtitle>Evolve: {pokemon.evolvesFrom}</Subtitle>
         </Features>
         </Container> :
          null}
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium earum eum ab, rem laboriosam, eius voluptates quidem obcaecati nesciunt doloribus ullam dignissimos provident consequuntur animi amet quia at dolorum. Delectus aspernatur dolorem ipsa. Asperiores voluptates incidunt itaque provident iure earum reprehenderit quas ipsa, repudiandae qui dolorem voluptate blanditiis! Iste, esse molestiae. Nam, accusantium vitae pariatur temporibus dolorum ea eius beatae, illo, optio vel mollitia!</Text>
   </Wrap>
}

export default Pokemon;