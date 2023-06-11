import { useState } from 'react';
import { useRestartHandler } from '../../contexts';
import { Caption } from '../Caption';
import { MenuModal } from '../MenuModal';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from './navBar.types';
import { useMovesAndPlayersHandler } from '../../contexts/useMovesAndPlayersHandler';
import { Players } from '../util.types';


export const NavBar = ({playerCount}:{playerCount: Players[number]}) => {
    const navigate:NavigateFunction = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const { dispatch: restartDispatch } = useRestartHandler();
    const { dispatch: movesAndPlayersDispatch } = useMovesAndPlayersHandler();
    
  return (
      <div className='flex mx-[5%] lg:mx-[13%] my-10 lg:my-0 justify-between items-center'>
          
          <Caption style={{ color: "black" }} />
          <div className='flex space-x-4'>
              <div className='text-white hidden md:inline w-36 h-14 p-3 text-xl font-bold text-center lg:mt-14 bg-yellow-500 hover:bg-yellow-400 rounded-full' onClick={() => {
                  restartDispatch({ type: 'restart' });
                  movesAndPlayersDispatch({ type: 'RESET' });
              }}>
              Restart
              </div>
              <div className='text-black hidden md:inline w-40 h-14 p-3 text-xl font-bold text-center lg:mt-14 bg-gray-300 hover:bg-cyan-700 hover:text-white rounded-full' onClick={() => navigate('/', { state: null, replace: true })}>
              New Game
              </div>
              <div className='text-white md:hidden w-20 h-10 p-2 text-base font-bold text-center  bg-yellow-500 hover:bg-yellow-400 rounded-full' onClick={() => setShowModal(true)}>
              Menu
              </div>
              <MenuModal playerCount={ playerCount } showModal={showModal} setShowModal={setShowModal} />

          </div>
          
          
      </div>
  )
}
