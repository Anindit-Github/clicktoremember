import React,{useState} from 'react';
import { StartGameButton } from '../StartGameButton';
import { ChildrenProps} from '../util.types';
import { SetUpStateType } from '../util.types';

export const SetUpButtons = ({ children }: ChildrenProps) => {
  const { themes, players, gridSizes } = children;
  const [setUpState, setSetUpState] = useState<SetUpStateType>({ theme: 'Numbers', playerCount: 1, grid: '4x4' })


  const handleClick = <T extends keyof SetUpStateType,>(key: T, value: SetUpStateType[T]) => {
    setSetUpState({...setUpState,[key]:value})
  }


  return (
    <>
      <div className='mt-1 caption-default'>
            Select Theme
      </div>
      <div className='flex mx-1 lg:mx-8 mt-3 space-x-3'>
        {themes.map((theme, idx) => (
          <div key={idx} className={setUpState.theme === theme ? 'bg-[#22313F] setup-default' : 'bg-gray-400 setup-default hover:bg-cyan-700'} onClick={() => handleClick<'theme'>('theme',theme)}>{theme}</div>
        ))}
      </div>
      <div className='caption-default'>
            Number of Players
      </div>
      <div className='flex mx-1 lg:mx-8 mt-3 space-x-2 lg:space-x-3'>
        {players.map((player, idx) => (
          <div key={idx} className={setUpState.playerCount === player ? 'bg-[#22313F] setup-default' : 'bg-gray-400 setup-default hover:bg-cyan-700'} onClick={() => handleClick<'playerCount'>('playerCount',player)}>{player}</div>
        ))}
      </div>
      <div className='caption-default'>
            Grid Size
      </div>
      <div className='flex mx-1 lg:mx-8 mt-3 space-x-3'>
        {gridSizes.map((grid, idx) => (
          <div key={idx} className={setUpState.grid === grid ? 'bg-[#22313F] setup-default' : 'bg-gray-400 setup-default hover:bg-cyan-700'} onClick={() => handleClick<'grid'>('grid',grid)}>{grid}</div>
        ))}
      </div>

      
      <StartGameButton setUpState={setUpState} />
    </>
    
  )
}
