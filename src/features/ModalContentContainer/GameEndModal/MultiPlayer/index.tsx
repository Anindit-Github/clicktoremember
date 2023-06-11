import { useMemo } from 'react';
import { useMovesAndPlayersHandler } from '../../../../contexts/useMovesAndPlayersHandler';
import { Players } from '../../../util.types';
import { POINT_STORE_INDICES } from '../../../../constants';

export const MultiPlayer = ({ playerCount }: { playerCount: Players[number] }) => {
    const { state } = useMovesAndPlayersHandler();
    const { names, pointStore } = state;

    const winnerIndices = useMemo(() => {
        const maxPointsScored = Math.max(...pointStore);
        const indexOfMaxPoints = pointStore.indexOf(maxPointsScored);
        if (indexOfMaxPoints === pointStore.lastIndexOf(maxPointsScored)) {
            return [indexOfMaxPoints];
        } else {
            return pointStore.reduce((accumulatorArray: number[], currentElement, index) => {
                if (currentElement === maxPointsScored) accumulatorArray.push(index);
                return accumulatorArray;
            }, []);
        }
    }, [pointStore]);

    const nonWinnerIndices = useMemo(() => {
        return POINT_STORE_INDICES.slice(0, playerCount).filter((element) => !winnerIndices.includes(element));
    }, [pointStore]);

    return (
        <>
            <header className="flex flex-col">
                <h1 className="font-bold text-4xl lg:text-5xl mx-auto mt-8 mb-4 text-center">{winnerIndices.length > 1 ? "It's a tie!" : `Player ${names[winnerIndices[0]]} wins!`}</h1>
                <p className="mx-auto text-base text-center">Game over! Here are the results...</p>
            </header>

            {winnerIndices.map((index) => {
                return (
                    <section className="time-elapsed bg-black w-[95%] m-4 mt-3 h-20 rounded-lg mx-auto p-4 flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center">
                        <p className="text-white text-base lg:text-lg  font-bold mx-auto lg:mx-0">Player {names[index]} (Winner!)</p>
                        <time className="digits-white text-2xl font-bold mx-auto lg:mx-0">{pointStore[index]} Pairs</time>
                    </section>
                );
            })}

            {nonWinnerIndices?.map((index) => {
                return (
                    <section className="time-elapsed bg-slate-300 w-[95%] m-4 mt-3 h-20 rounded-lg mx-auto p-4 flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center">
                        <p className="text-stone-600 text-base lg:text-lg  font-bold mx-auto lg:mx-0">Player {names[index]} </p>
                        <time className="digits text-2xl font-bold mx-auto lg:mx-0">{pointStore[index]} Pairs</time>
                    </section>
                );
            })}
        </>
    );
};
