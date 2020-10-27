import React from 'react';
import styled from 'styled-components';

const FiltersWrap = styled.div`

width: 30%;
margin-left: 5em;

`;
const Type = styled.select`
margin:120px;
`;
const Filters = () => {
        return <FiltersWrap>
                <Type>
                        <option value="type">Type</option>
                        <option value="colorless">Colorless</option>
                        <option value="darkness">Darkness</option>
                        <option value="dragon">Dragon</option>
                        <option value="fairy">Fairy</option>
                        <option value="fighting">Fighting</option>
                        <option value="fire">Fire</option>
                        <option value="grass">Grass</option>
                        <option value="lightning">Lightning</option>
                        <option value="metal">Metal</option>
                        <option value="psychic">Psychic</option>
                        <option value="water">Water</option>
                </Type>
                <select>
                        <option value="subtype">Subtype</option>
                        <option value="ex">EX</option>
                        <option value="special">Special</option>
                        <option value="restored">Restored</option>
                        <option value="levelUp">Level Up</option>
                        <option value="technicalMachine">MEGA</option>
                        <option value="item">Item</option>
                        <option value="stadium">Stadium</option>
                        <option value="supporter">Supporter</option>
                        <option value="stageOne">Stage 1</option>
                        <option value="gx">GX</option>
                        <option value="pokemonTool">Pokémon Tool</option>
                        <option value="basic">Basic</option>
                        <option value="legend">LEGEND</option>
                        <option value="stageTwo">Stage 2</option>
                        <option value="break">BREAK</option>
                        <option value="rsm">Rocket's Secret Machine</option>
                </select>
        </FiltersWrap>
}

export default Filters;