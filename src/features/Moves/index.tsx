import React from 'react'
import { useMovesAndPlayersHandler } from '../../contexts/useMovesAndPlayersHandler';

export const Moves = () => {
  const { state} = useMovesAndPlayersHandler();
  return (
    <div className='bg-gray-300 w-[150px] lg:w-[200px] h-20 lg:h-16 flex flex-col justify-center items-center rounded'>
        <p className="font-bold text-base text-gray-500">Moves</p>
      <div className='text-black text-2xl font-bold lg:text-base'>{state.moves[0]}</div>
    </div>
  )
}
