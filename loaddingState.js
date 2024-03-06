'use client';

import { createContext, useReducer } from 'react';

export const LoadingContext = createContext({ isOn: false, timeout: 2000 });

const initialState = false;
const reducer = (state, action) => {
  switch (action?.type) {
    case 'open':
      return { isOn: true, timeout: action?.payload?.timeout ?? 2000 };
    case 'close':
      return { isOn: false, timeout: 2000 };
    default:
      return { isOn: false, timeout: 2000 };
  }
};
export const LoadingContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LoadingContext.Provider value={[state, dispatch]}>
      {props.children}
    </LoadingContext.Provider>
  );
};
