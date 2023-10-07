import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QuoteReducer} from '../reducers/QuoteReducer';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('MOVIONIC_APP::QUOTES', jsonValue);
  } catch (e) {
    console.log('Unable to store data:', e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('MOVIONIC_APP::QUOTES');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Unable to get data:', e);
  }
};

export const QuoteContext = createContext({quotes: []});

const QuoteContextProvider = props => {
  const [quotes, dispatch] = useReducer(QuoteReducer, []);

  useEffect(() => {
    async function rehydrate() {
      const storedState = await getData();
      if (storedState) {
        dispatch({type: 'hydrate', payload: storedState});
      }
    }
    rehydrate();
  }, []);

  useEffect(() => {
    storeData(quotes);
  }, [quotes]);

  return (
    <QuoteContext.Provider value={{quotes, dispatch}}>
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteContextProvider;
