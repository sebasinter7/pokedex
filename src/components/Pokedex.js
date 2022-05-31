import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const user = useSelector( state => state.user )

    const [ pokemon, setPokemon ] = useState( [ ] )

    useEffect( ( ) => {
      axios.get( 'https://pokeapi.co/api/v2/pokemon' )
       .then( res => setPokemon( res.data.results ) ) 
    }, [ ] )

    return (
      <div>
        <h1>Pokedex</h1>
        <p>Welcome { user }!</p>
        {
          pokemon.map( pokemon => ( 
            <PokemonCard pokemonUrl={ pokemon.url } />
          ) )
        }
      </div>
    );
};

export default Pokedex;