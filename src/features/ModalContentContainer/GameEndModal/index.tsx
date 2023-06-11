import React, { useEffect } from 'react';
import { Players } from '../../util.types';
import { MultiPlayer } from './MultiPlayer';
import { ResetButtons } from './ResetButtons';
import { SinglePlayer } from './SinglePlayer';

export const GameEndModal = ({ handleModalSize, playerCount }: { handleModalSize: ({ width, height }: { width: number; height: number }) => void; playerCount: Players[number] }) => {
    const SINGLE_PLAYER = playerCount === 1;

    useEffect(() => {
        handleModalSize({ width: 600, height: 500 + playerCount * 50 });
    }, []);

    return (
        <>
            {(() => {
                if (SINGLE_PLAYER) {
                    return <SinglePlayer />;
                }
                return <MultiPlayer playerCount={playerCount} />;
            })()}
            <ResetButtons />
        </>
    );
};
