import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import image_11 from '../img/image_11.png'

const UserInput = () => {

  const [ userName, setUserName ] = useState( "" )
 

  const navigate = useNavigate( )
  const dispatch = useDispatch( )
  
  const getName = ( ) => {
    
    dispatch( changeUser( userName ) )
    navigate( '/pokedex' )
  }
  return (
    <div className='container-user'>      
      <img className='img-user' src={ image_11 } alt="" />
      <h1 className='title-user'>Hello pokemon trainer!</h1>
      <p className='p-user'>Give me your name to start</p>
      <div className='input-container'>
      <input 
        className='input-user'
        type="text" 
        value={ userName } 
        onChange={ e => setUserName( e.target.value ) } />
      <button className='btn-user' onClick={ getName }>Send</button>
      </div>
    </div>
    );
};

export default UserInput;