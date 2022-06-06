import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image_11 from '../img/image_11.png'

const PokemonDetails = (  ) => {

    const { id } = useParams( )

    const [ pokemon, setPokemon ] = useState( { } )
    

    useEffect( ( ) => {
        axios.get( `https://pokeapi.co/api/v2/pokemon/${ id }/` )
          .then( res => setPokemon( res.data ) )
    }, [ id ] )

    console.log( pokemon )
    

    return (
        <div>
            <nav>
                <div className='nav-pokedex'>
                    <div className='nav-up'>
                        <img className='img-pokedex' src={ image_11 } alt="" />
                    </div>
                    <div className='nav-down'></div>
                </div>
            </nav>
            <div className='container-details'>
                <div className='top-card'>
                    <img className='img-details' src={ pokemon.sprites?.other["official-artwork"].front_default } alt="" />
                    <p># { pokemon.id }</p>
                    <h1>{ pokemon.name }</h1>
                </div>
                    <div className='' key={pokemon.id}>
                        <div className='type'>
                            <h3>Type</h3>
                                { 
                                    pokemon.types?.map( pokemon => ( 
                                    
                                        <p>{ pokemon.type?.name }</p>
                                        
                                        
                                    ) )
                                }
                        </div>
                        <div className='ability'>
                            <h3>Ability</h3>
                                { 
                                    pokemon.abilities?.map( pokemon => (
                                        <p>{ pokemon.ability?.name }</p>
                                    ) )
                                }
                        </div>
                    </div>
                    <div className='stats'>
                        <h3>Stats</h3>
                        { 
                            pokemon.stats?.map( pokemon => (
                                <p>{ pokemon.stat?.name } : { pokemon.base_stat }</p>                                   
                            ) )
                        }
                    </div>
                    <div className='movements'>
                        <h3>Movements</h3>
                        { 
                            pokemon.moves?.map( pokemon => (
                                <p>{ pokemon.move?.name }</p>                                   
                            ) )
                        }
                    </div>
            </div>
        </div>
    );
};

export default PokemonDetails;