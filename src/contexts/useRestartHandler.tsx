import * as React from 'react'
import {RestartAction, RestartDispatch, RestartState, RestartProviderProps, EndAction} from './util.types'


const RestartStateContext = React.createContext<
  {state: RestartState; dispatch: RestartDispatch} | undefined
>(undefined)

function countReducer(state: RestartState, action: RestartAction | EndAction) {
  switch (action.type) {
    case 'restart': {
      return {...state, restart: !state.restart, end: false}
    }
    case 'END': {
      return {...state, end: true}
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function RestartProvider({children}: RestartProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, {restart: false, end: false})
  const value = React.useMemo(() =>
  {
    return { state, dispatch }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <RestartStateContext.Provider value={value}>
      {children}
    </RestartStateContext.Provider>
  )
}

function useRestartHandler() {
  const context = React.useContext(RestartStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {RestartProvider, useRestartHandler}