import { Reducer } from 'react';

export interface AppState {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  address?: string;
  timestamp?: number;
}

export type AppActions =
  | 'SET_FIRSTNAME'
  | 'SET_LASTNAME'
  | 'SET_BIRTHDATE'
  | 'SET_ADDRESS';

export interface AppAction {
  type: AppActions;
  payload?: any;
}

const reducer: Reducer<AppState, AppAction> = (state, action) => {
  switch (action.type) {
    case 'SET_FIRSTNAME':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'SET_LASTNAME':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'SET_BIRTHDATE':
      return {
        ...state,
        birthDate: action.payload,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload,
        timestamp: Date.now(),
      };
    default:
      return state;
  }
};

export default reducer;
