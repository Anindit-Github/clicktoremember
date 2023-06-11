import React from 'react';
import { useRestartHandler } from '../../../../contexts';
import { useNavigate } from 'react-router-dom';
import { useMovesAndPlayersHandler } from '../../../../contexts/useMovesAndPlayersHandler';
import { NavigateFunction } from '../../../NavBar/navBar.types';

export const ResetButtons = () => {
    const navigate: NavigateFunction = useNavigate();
    const { dispatch: restartDispatch } = useRestartHandler();
    const { dispatch: movesAndPlayersDispatch } = useMovesAndPlayersHandler();
    return (
        <>
            <section className="flex flex-col lg:flex-row lg:justify-between items-center lg:w-[95%] lg:m-4 lg:mt-8 mt-2 h-auto">
                <button
                    className="bg-yellow-500 rounded-full w-[94%] lg:w-[48%] h-12 font-bold text-white text-md lg:text-lg"
                    onClick={() => {
                        restartDispatch({ type: 'restart' });
                        movesAndPlayersDispatch({ type: 'RESET' });
                    }}
                >
                    Restart
                </button>
                <button
                    className="bg-slate-300 rounded-full w-[94%] lg:w-[48%] h-12 mt-2 mb-4 lg:mt-0 lg:mb-0 font-bold text-stone-900 text-md lg:text-lg"
                    onClick={() => navigate('/', { state: null, replace: true })}
                >
                    Setup New Game
                </button>
            </section>
        </>
    );
};
