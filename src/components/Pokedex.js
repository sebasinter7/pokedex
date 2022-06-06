import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import image_11 from '../img/image_11.png'

const Pokedex = () => {

    const user = useSelector( state => state.user )

    const [ pokemonSearch, setPokemonSearch ] = useState( "" )
    const [ pokemon, setPokemon ] = useState( [ ] )
    const [ pokemonTypes, setPokemonTypes ] = useState( [ ] )
    const [ page, setPage ] = useState( 1 )

    const navigate = useNavigate( )
    
    useEffect( ( ) => {
      axios.get( 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0' )
       .then( res => setPokemon( res.data.results ) )
       
      axios.get( 'https://pokeapi.co/api/v2/type/' )
        .then( res => setPokemonTypes( res.data.results ) )
    }, [ ] )

    //console.log( pokemonTypes )
    //console.log( pokemon )

    const search = ( ) => {
      navigate( `/pokemon/${ pokemonSearch }` )
    }

    const filterPokemonTypes = e => {
      axios.get( e.target.value )
        .then( res => setPokemon( res.data.pokemon ) )
    }

    const pokemonNumbers = 6
    const lastIndex = pokemonNumbers * page
    const firstIndex = lastIndex -pokemonNumbers
    const pokemonPaginated = pokemon.slice( firstIndex, lastIndex )
    console.log( pokemonPaginated )
    
    const lastPage = Math.ceil( pokemon.length / pokemonNumbers )

    const numbers = [ ]
    for( let i = 1; i <= lastPage; i++ ) {
      numbers.push( i )
    }

    return (
      <div className='container-pokedex'>
        <div className='nav-pokedex'>
          <div className='nav-up'>
            <img className='img-pokedex' src={ image_11 } alt="" />
          </div>
          <div className='nav-down'></div>
        </div>
        <div className='title-pokedex'>
          <p>Welcome  <span>  { user }</span>, here you can find your favorite pokemon</p>
        </div>
        <div>
          <div className='btn-search'>
            <div>
              <input
                className='input-pokedex' 
                type="text" 
                value={ pokemonSearch }
                onChange={ e => setPokemonSearch( e.target.value ) } />
              <button className='btn-pokedex' onClick={ search }>Search</button>
            </div>
            <div>
              <select
                className='select-pokedex' 
                onChange={ filterPokemonTypes }>
                {
                  pokemonTypes.map( types => (
                    <option key={ types.name } value={ types.url }>{ types.name }</option>
                  ) )
                }
              </select>
            </div>
          </div>
        </div>
        <div className='cards'>
        {
          pokemonPaginated.map( pokemon => ( 
            <PokemonCard 
              key={ pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url } 
              pokemonUrl={ pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url } />
          ) )
        }
        </div>
        <div className='btn-paginated'>
          <button 
            className='btn'
            onClick={ ( ) => setPage( page - 1 ) }
            disabled={ page === 1 }
            >
              Prev
          </button>

          <button 
            className='btn'
            onClick={ ( ) => setPage( page + 1 ) }
            disabled={ page === lastPage }
            >
              Next
          </button>
        </div>
        
      </div>
    );
};

export default Pokedex;