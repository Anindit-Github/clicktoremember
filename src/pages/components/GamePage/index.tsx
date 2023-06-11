import { useLocation } from 'react-router-dom';
import { RestartProvider, TimerContextProvider } from '../../../contexts';
import { MovesAndPlayersInfoProvider } from '../../../contexts/useMovesAndPlayersHandler';
import { GridDisplay, Clock, NavBar } from '../../../features';
import { Moves } from '../../../features/Moves';
import { PlayerTurns } from '../../../features/PlayerTurns';
import { Location } from './gamePage.types';

export const GamePage = () => {
    let { state }: Location = useLocation();
    const { grid, playerCount, theme } = state;

    return (
        <>
            <RestartProvider>
                <TimerContextProvider>
                    <MovesAndPlayersInfoProvider>
                        <div className="flex flex-col">
                            <NavBar playerCount={playerCount}/>
                            <GridDisplay gridSize={grid} playerCount={playerCount} theme={ theme } />
                            {playerCount === 1 ? <div className="mx-[5%] lg:mx-auto flex justify-between lg:w-[580px] mt-16 lg:mt-7">
                                <Clock />
                                <Moves />
                            </div> :
                                <PlayerTurns playerCount={playerCount}/>
                            }
                        </div>
                    </MovesAndPlayersInfoProvider>
                </TimerContextProvider>
            </RestartProvider>
        </>
    );
};
