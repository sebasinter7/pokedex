import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';

const UserInput = () => {

  const [ userName, setUserName ] = useState( "" )

  const navigate = useNavigate( )
  const dispatch = useDispatch( )
  
  const getName = ( ) => {
    
    dispatch( changeUser( userName ) )
    navigate( '/pokedex' )
  }
  return (
    <div>
      <h1>User Input</h1>
      <input 
        type="text" 
        value={ userName } 
        onChange={ e => setUserName( e.target.value ) } />
      <button onClick={ getName }>Send</button>
    </div>
    );
};

export default UserInput;