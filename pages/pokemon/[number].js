import React from 'react';
import axios from 'axios';
import Link from 'next/link';


const pokemon = ({ pokemon }) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src = {pokemon.sprites.front_default} style={{ height: 400 }} />
            <img src = {pokemon.sprites.front_shiny} style={{ height: 400 }} />

            <h2>Height: {pokemon.height}</h2>
            <h2>Weight: {pokemon.weight}</h2>
         
            <div>
                <Link href="/">
                    <a>home</a>
                </Link>
            </div>
        </div>
    );
};

pokemon.getInitialProps = async ({ query }) => {
    const number = query.number;
    const pokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.data);
    return { pokemon };
}

export default pokemon;