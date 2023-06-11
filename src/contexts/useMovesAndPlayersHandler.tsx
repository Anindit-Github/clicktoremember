import * as React from 'react';
import { MovesAndPlayersInfoState, MovesAndPlayersAction, MovesAndPlayersDispatch, MovesAndPlayersInfoProviderProps } from './util.types';


const InitialState: MovesAndPlayersInfoState = {
  currentPlayer: 0,
  moves: [0, 0, 0, 0],
  names: ['1', '2', '3', '4'],
  pointStore: [0,0,0,0]
}

const MovesAndPlayersContext = React.createContext<
  {state: MovesAndPlayersInfoState; dispatch: MovesAndPlayersDispatch} | undefined
  >(undefined)

const movesAndPlayerReducer = (state: MovesAndPlayersInfoState, action: MovesAndPlayersAction): MovesAndPlayersInfoState => {
  //@ts-ignore
  const { type, payload } = action;
  const { currentPlayer=0, whoseMove=0, whosePoint=undefined } = payload || {};
  const moves: [number, number, number, number] = [...state.moves];
  const pointStore: [number, number, number, number] = [...state.pointStore];
  switch (type) {
    case 'INCREMENT_MOVES': {
      moves[whoseMove]++;
      if (typeof whosePoint !== 'undefined') {
        pointStore[whosePoint]++;
      } 
      return {...state, currentPlayer: currentPlayer, moves, pointStore}
    }
    case 'RESET': {
      return InitialState;
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}


function MovesAndPlayersInfoProvider({children}: MovesAndPlayersInfoProviderProps) {
  const [state, dispatch] = React.useReducer(movesAndPlayerReducer, InitialState)
  const value = React.useMemo(() =>
  {
    return { state, dispatch }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <MovesAndPlayersContext.Provider value={value}>
      {children}
    </MovesAndPlayersContext.Provider>
  )
}


function useMovesAndPlayersHandler() {
  const context = React.useContext(MovesAndPlayersContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context;
}

export { MovesAndPlayersInfoProvider, useMovesAndPlayersHandler };