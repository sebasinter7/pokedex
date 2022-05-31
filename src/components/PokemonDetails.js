import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {

    const { id } = useParams( )

    return (
        <div>
            <h1>Pokemon Details</h1>
            <p>Accediendo al pokemon con id: { id }</p>
        </div>
    );
};

export default PokemonDetails;