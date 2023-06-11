import { useState, useEffect, useRef } from 'react';
import { TimerDispatch, TimerState } from '../contexts/util.types'


export const useTimer = (state: TimerState, restartState:{restart: boolean, end:boolean}, timerDispatch: TimerDispatch) => {
    const [time, setTime] = useState(0);
    const intervalId: { current: NodeJS.Timeout | null } = useRef(null);

    useEffect(() => {
        setTime(0);
    },[restartState.restart])

    useEffect(() => {
        if (!state.pauseTime) {
            intervalId.current = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            setTime(time);
            timerDispatch({ type: 'recordedTime', payload: time });
            clearInterval(intervalId.current as NodeJS.Timeout);
        }
        return () => {
            clearInterval(intervalId.current as NodeJS.Timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.pauseTime]);

    return time;
};
