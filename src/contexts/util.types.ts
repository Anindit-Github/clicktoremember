export type RestartAction = { type: 'restart' };
export type EndAction = { type: 'END' };
export type RestartDispatch = (action: RestartAction | EndAction) => void;
export type RestartState = { restart: boolean, end: boolean };
export type RestartProviderProps = { children: React.ReactNode | React.ReactNode[] };

export type TimerAction = { type: 'pauseTime'; payload: boolean } | { type: 'stopTime'; payload: boolean } | { type: 'recordedTime'; payload: number };
export type TimerDispatch = (action: TimerAction) => void;
export type TimerState = { pauseTime: boolean; stopTime: boolean; recordedTime: number };
export type TimerProviderProps = { children: React.ReactNode | React.ReactNode[] };

export type MovesAndPlayersAction = {
    type: 'INCREMENT_MOVES';
    payload: {
        whoseMove: 0 | 1 | 2 | 3;
        currentPlayer: 0 | 1 | 2 | 3;
        whosePoint?: 0 | 1 | 2 | 3;
    };
} | { type: 'RESET' };


export type MovesAndPlayersDispatch = (action: MovesAndPlayersAction) => void;
export type MovesAndPlayersInfoProviderProps = { children: React.ReactNode | React.ReactNode[] };
export type MovesAndPlayersInfoState = {
    currentPlayer: 0 | 1 | 2 | 3;
    moves: [number, number, number, number];
    names: readonly ['1', '2', '3', '4'];
    pointStore: [number, number, number, number];
};