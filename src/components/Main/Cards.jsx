import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardsWrap = styled.div`
        display:flex;
        flex-wrap:wrap;
        width: 60%;     
        margin-left: 20px;
`;
const CardImage = styled.div`
`;
const CardWrap = styled.div`
width: 50%;
`;
const CardName = styled.h3``;
const CardArtist = styled.h3``;

const Card = ({img, name, artist, id}) =>{
        
        return <CardWrap>
                <CardImage><img src = {img} alt = {name}/></CardImage>
                <CardName><Link to ={`/pokemon/${id}`} >{name}</Link></CardName>
                <CardArtist >{artist}</CardArtist>
        </CardWrap>
}

const Cards = props => {

        return <CardsWrap>
                {props.pokemons ? props.pokemons.map((p, index) =>  <Card id = {p.id} key = {index} img = {p.imageUrl} name = {p.name} artist = {p.artist}/>):null}
        </CardsWrap>
}

export default Cards;