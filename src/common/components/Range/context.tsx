'use client';
import { FC, createContext, useReducer } from 'react';
import {
  Action,
  RangeComponentProviderProps,
  RangeComponentStore,
  State,
} from './interface';

const initialState: State = {
  data: [],
  mode: 'normal',
  minValue: 0,
  maxValue: 0,
  width: 600,
};

export const RangeComponentContext = createContext<
  RangeComponentStore | undefined
>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload };
    case 'SET_MIN':
      return { ...state, minValue: action.payload.min };
    case 'SET_MAX':
      return { ...state, maxValue: action.payload.max };
    default:
      return state;
  }
}

export const RangeComponentProvider: FC<RangeComponentProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const props: RangeComponentStore = {
    state,
    dispatch,
  };

  return (
    <RangeComponentContext.Provider value={props}>
      {children}
    </RangeComponentContext.Provider>
  );
};
