import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../link.css';
import {pokemonPath} from '../constatns';

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
const CardName = styled.h3`
color:#fff;
`;
const CardArtist = styled.h3`
color:#fff;
`;

const Card = ({img, name, artist, id}) =>{
        
        return <CardWrap>
                <CardImage><img src = {img} alt = {name}/></CardImage>
                <CardName><Link className = 'link' to ={`${pokemonPath}/${id}`} >{name}</Link></CardName>
                <CardArtist >{artist}</CardArtist>
        </CardWrap>
}

const Cards = props => {

        return <CardsWrap>
                {props.pokemons ? props.pokemons.map((p, index) => (index < 10) ? <Card id = {p.id} key = {index} img = {p.imageUrl} name = {p.name} artist = {p.artist}/>: null):null}
        </CardsWrap>
}

export default Cards;