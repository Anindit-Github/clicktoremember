import React from 'react'
import { NavigateFunction } from './startGameButton.types';
import { StartGameButtonProps } from './startGameButton.types'
import { useNavigate } from 'react-router-dom';


export const StartGameButton = ({setUpState}: StartGameButtonProps) => {
  const navigate:NavigateFunction = useNavigate();
  
  return (
    <button className='mt-7 mb-2 lg:mt-11 w-[97%] lg:w-[90.5%] mr-2 ml-1 lg:mb-8 lg:ml-7 rounded-full h-10 lg:h-14 text-base mx-auto lg:text-xl font-bold text-white bg-yellow-500 hover:bg-yellow-400' onClick={() => navigate('/game', { state: setUpState })}>Start Game</button>
  )
}
