import React, {
  createContext,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import Localization from './localization';

import appReducer, { AppAction, AppState } from './reducer';

export type Dispatch = (action: AppAction) => void;

export const STORAGE_KEY = 'user_info';

let storedState = localStorage.getItem(STORAGE_KEY);
let initialState: AppState = {};

if (storedState) {
  initialState = JSON.parse(storedState) as AppState;
}

const withCache = (reducer: Reducer<any, any>) => {
  return (state: any, action: any) => {
    const newState = reducer(state, action);
    console.log(action, newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    return newState;
  };
};

const Context = createContext<AppState>(initialState);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

interface StateProviderProps {
  localization: Localization;
}

const StateProvider: React.FC<StateProviderProps> = ({
  children,
  localization,
}) => {
  const [state, dispatch] = useReducer(withCache(appReducer), initialState);

  useEffect(() => {
    localization.getAdress().subscribe(payload => {
      dispatch({ type: 'SET_ADDRESS', payload });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

function useAppState() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAppState must be used within a AppStateProvider');
  }

  return context;
}

function useDispatch() {
  const context = useContext(DispatchContext);

  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }

  return context;
}

function useGlobalState() {
  return {
    state: useAppState(),
    dispatch: useDispatch(),
  };
}

export { StateProvider, useGlobalState };
