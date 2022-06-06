import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ( { pokemonUrl } ) => {

  const [ pokemon, setPokemon ] = useState( {} )

  const navigate = useNavigate( )

  useEffect( ( ) => {
    axios.get( pokemonUrl )
      .then( res => setPokemon( res.data ) )
  }, [pokemonUrl] )

  console.log( pokemon )
  
  return (
    
      <div className='cards-poke'>
        <div className=''>
          <div>
            <div  
              className='cards-pokemon' 
              onClick={ ( ) => navigate( `/pokemon/${ pokemon.id }` ) }>
              <img className='img-cards' src={ pokemon.sprites?.other["official-artwork"].front_default } alt="" />
              <h3 className='title-cards'>{ pokemon.name }</h3>
            </div>
            <div className='cards-data'>
              <div className='weigth'>
                <p><span>Weight</span></p>
                <p>{ pokemon.weight }</p>
              </div>
              <div className='height'>
                <p><span>Height</span></p>
                <p>{ pokemon.height }</p>
              </div>
            </div>
          </div>
        </div>        
      </div>
    

  );
};

export default PokemonCard;