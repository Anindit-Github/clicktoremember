import React from 'react';
import { useMovesAndPlayersHandler } from '../../contexts/useMovesAndPlayersHandler';
import { PlayerCount } from '../util.types';


const defaultContainerStyle = `h-24 w-[30%] lg:h-18 rounded-lg font-bold text-lg before:content-['P'] lg:before:content-['Player'] text-center p-4 text-gray-700 my-10`;


export const PlayerTurns = ({ playerCount }: PlayerCount) => {
    const { state } = useMovesAndPlayersHandler();

    const currentPlayerTurn = (index: 0 | 1 | 2 | 3) => {
        return state.currentPlayer !== index ? 'bg-gray-300' : 'bg-yellow-500 triangle';
    };

    return (
        <div className="flex mx-[5%] lg:mx-[18%] mt-2 justify-between">
            {state.names.slice(0, playerCount).map((name, index) => {
                return (
                    <div key={index} className={defaultContainerStyle.concat(' ', currentPlayerTurn(index as 0 | 1 | 2 | 3))}>
                        <span> {name}</span>
                        <p className="font-bold text-2xl">{state.moves[index]}</p>
                    </div>
                );
            })}
        </div>
    );
};
