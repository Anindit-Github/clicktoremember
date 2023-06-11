import * as React from 'react';
import {TimerAction, TimerDispatch, TimerState, TimerProviderProps} from './util.types'


const TimerStateContext = React.createContext<
  {state: TimerState; dispatch: TimerDispatch} | undefined
    >(undefined)


function timerReducer(state: TimerState, action: TimerAction) {
  switch (action.type) {
    case 'pauseTime': {
      return {...state,pauseTime: action.payload}
      }
    case 'stopTime': {
      return {...state,stopTime: action.payload}
      }
    case 'recordedTime': {
      return {...state,recordedTime: action.payload}
    }
    default: {
      throw new Error(`Unhandled action type: ${action['type']}`)
    }
  }
}

function TimerContextProvider({children}: TimerProviderProps) {
  const [state, dispatch] = React.useReducer(timerReducer, { pauseTime: false, stopTime: false, recordedTime: 0 })
  // NOTE: you *might* need to memoize this value
  const value = React.useMemo(() => { return { state, dispatch } },[state])
  return (
    <TimerStateContext.Provider value={value}>
      {children}
    </TimerStateContext.Provider>
  )
}

function useTimerHandler() {
  const context = React.useContext(TimerStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {TimerContextProvider, useTimerHandler}