import { useState, useEffect, useRef } from 'react';
import { ColorsType, DivInfoArray } from './util.types';
import { RestartState, RestartDispatch, MovesAndPlayersInfoState, MovesAndPlayersDispatch } from '../contexts/util.types';

export const useChangeColorOnClick = (
    gridSize: '4x4' | '6x6',
    state: RestartState,
    endActionDispatch: RestartDispatch,
    movesAndPlayersState: MovesAndPlayersInfoState,
    movesAndPlayersDispatch: MovesAndPlayersDispatch,
    playerCount: 1 | 2 | 3 | 4,
): [ColorsType[], (idx: number, element: number) => void] => {
    const LEN = gridSize === '4x4' ? 8 : 18;
    const [colorState, setColorState] = useState<ColorsType[] | null>(null);
    const disabled = useRef(false);
    const divClickInfo = useRef<DivInfoArray>([]);
    const currentPlayerStore = useRef<0 | 1 | 2 | 3>(0);

    const { currentPlayer } = movesAndPlayersState;

    useEffect(() => {
        // Set initial colors to dark blue
        setColorState(new Array(LEN * 2).fill('#22313F'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    useEffect(() => {
        if (divClickInfo.current.length === 4) {
            const color = [...colorState!];
            disabled.current = true;
            setTimeout(() => {
                // Condition where color matches
                if (divClickInfo.current[1] === divClickInfo.current[3]) {
                    color[divClickInfo.current[0]] = color[divClickInfo.current[2]] = '#ABB7B7';
                    setColorState(color);
                    // TODO: increment the move and continue with the same player
                    movesAndPlayersDispatch({
                        type: 'INCREMENT_MOVES',
                        payload: {
                            whoseMove: currentPlayer,
                            whosePoint: currentPlayer,
                            currentPlayer,
                        }
                    });
                } else {
                    color[divClickInfo.current[0]] = color[divClickInfo.current[2]] = '#22313F';
                    setColorState(color);
                    // TODO: increment the move and change the player
                    if (playerCount !== 1) {
                        currentPlayerStore.current = (currentPlayer < (playerCount-1) ? currentPlayer + 1 : 0) as 0 | 1 | 2 | 3;
                    }

                    else {
                        currentPlayerStore.current = movesAndPlayersState.currentPlayer
                    }
                    movesAndPlayersDispatch({
                        type: 'INCREMENT_MOVES',
                        payload: {
                            whoseMove: currentPlayer,
                            currentPlayer: currentPlayerStore.current
                        }
                    });
                }
                disabled.current = false;
                divClickInfo.current = [];
            }, 600);
        }
        if (colorState?.every((color) => color === '#ABB7B7')) {
            endActionDispatch({ type: 'END' });
        }
        
    }, [colorState]);

    const handleDivClick = (idx: number, element: number) => {
        if (colorState![idx] === '#22313F' && !disabled.current) {
            divClickInfo.current = [idx, element, ...divClickInfo.current];
            const color = [...colorState!];
            color[divClickInfo.current[0]] = '#EAB308';
            setColorState(color);
        }
    };

    return [colorState as ColorsType[], handleDivClick];
};
