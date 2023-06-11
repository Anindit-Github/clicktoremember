import { useState, useCallback, useEffect } from 'react';
import { RestartState } from '../contexts/util.types';


export const useCreateArrayToShuffle = (gridSize: '4x4' | '6x6', state:RestartState): number[] => {
    const [array, setArray] = useState<number[]>([]);
    const LEN = gridSize === '4x4' ? 8 : 18;
    
    const createArrayAndShuffle = useCallback(() => {
        const array = [];
        for (let i = 0; i < LEN; i++) {
        array.push(i, i);
        }
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j],array[i]]
        }
        setArray(array);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gridSize]);
    
    useEffect(createArrayAndShuffle, [createArrayAndShuffle, state]);

   
    return array;
}


