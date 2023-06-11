import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRestartHandler } from '../../../contexts';
import { useMovesAndPlayersHandler } from '../../../contexts/useMovesAndPlayersHandler';
import { NavigateFunction } from '../../NavBar/navBar.types';

export const NavBarModal = ({ handleCloseModal, handleModalSize }: { handleCloseModal: () => void; handleModalSize: ({ width, height }: { width: number; height: number }) => void }) => {
    const navigate: NavigateFunction = useNavigate();
    const { dispatch: restartDispatch } = useRestartHandler();
    const { dispatch: movesAndPlayersDispatch } = useMovesAndPlayersHandler();

    useEffect(() => {
        handleModalSize({ width: 330, height: 220 });
    }, []);

    return (
        <>
            <div
                className="mx-4 text-white h-12 p-2 text-xl font-bold text-center bg-yellow-500 hover:bg-yellow-400 rounded-full"
                onClick={() => {
                    restartDispatch({ type: 'restart' });
                    movesAndPlayersDispatch({ type: 'RESET' });
                    handleCloseModal();
                }}
            >
                Restart
            </div>
            <div
                className="mx-4 text-black h-12 p-2 text-xl font-bold text-center mt-4 bg-gray-200  hover:bg-cyan-700 hover:text-white rounded-full"
                onClick={() => navigate('/', { state: null, replace: true })}
            >
                New Game
            </div>
            <div className="mx-4 text-black h-12 p-2 text-xl font-bold text-center mt-4 bg-gray-200  hover:bg-cyan-700 hover:text-white rounded-full" onClick={handleCloseModal}>
                Resume Game
            </div>
        </>
    );
};
