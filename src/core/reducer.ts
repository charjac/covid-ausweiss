import { Reducer } from 'react';

export interface AppState {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  birthPlace?: string;
  address?: string;
  city?: string;
  timestamp?: number;
  signatureURI?: string;
}

export type AppActions =
  | 'SET_FIRSTNAME'
  | 'SET_LASTNAME'
  | 'SET_BIRTHDATE'
  | 'SET_SIGNATURE'
  | 'SET_ADDRESS'
  | 'SET_BIRTHPLACE';

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
    case 'SET_BIRTHPLACE':
      return {
        ...state,
        birthPlace: action.payload,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload.address,
        city: action.payload.city,
        timestamp: Date.now(),
      };
    case 'SET_SIGNATURE':
      return {
        ...state,
        signatureURI: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
