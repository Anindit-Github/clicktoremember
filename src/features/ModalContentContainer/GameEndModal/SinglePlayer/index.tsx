import React, { useMemo } from 'react';
import { useTimerHandler } from '../../../../contexts';
import { useMovesAndPlayersHandler } from '../../../../contexts/useMovesAndPlayersHandler';


export const SinglePlayer = () => {
    const { state: timerState } = useTimerHandler();
    const { state: movesAndPlayersState } = useMovesAndPlayersHandler();

    const { recordedTime } = timerState;

    const recordedTimeDisplay = useMemo(() => {
        const time = ('0' + Math.floor((recordedTime / 60000) % 60))
            .slice(-2)
            .concat(':', ('0' + Math.floor((recordedTime / 1000) % 60)).slice(-2), ':', ('0' + ((recordedTime / 10) % 100)).slice(-2));

        return time;
    }, [recordedTime]);

    return (
        <>
            <header className="flex flex-col">
                <h1 className="font-bold text-4xl lg:text-5xl mx-auto mt-8 mb-4 text-center">You did it!</h1>
                <p className="mx-auto text-base text-center">Game over! Here's how you got on</p>
            </header>

            <section className="time-elapsed bg-slate-300 w-[95%] m-4 mt-8 h-20 rounded-lg mx-auto p-4 flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center">
                <p className="text-stone-600 text-base lg:text-lg  font-bold mx-auto lg:mx-0">Time Elapsed</p>
                <time className="digits text-2xl font-bold mx-auto lg:mx-0">{recordedTimeDisplay}</time>
            </section>

            <section className="moves-taken bg-slate-300 w-[95%] m-4 h-20 rounded-lg mx-auto p-4 flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center">
                <p className="text-stone-600 text-base lg:text-lg  font-bold mx-auto lg:mx-0">Moves Taken</p>
                <p className="digits text-2xl font-bold mx-auto lg:mx-0">{movesAndPlayersState.moves[0]}</p>
            </section>
        </>
    );
};
