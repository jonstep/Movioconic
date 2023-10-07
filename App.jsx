/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useReducer, useState} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import QuoteContextProvider from './contexts/QuoteContext';
import {QuoteList} from './components/QuoteList';
import {AddQuote} from './components/AddQuote';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QuoteContextProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <SafeAreaView style={styles.screenContainer}>
          <View style={styles.screenHeader}>
            <Text style={styles.screenHeaderText}>Movioconic</Text>
          </View>
          <QuoteList />
          <AddQuote />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </QuoteContextProvider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    flex: 1,
  },
  screenHeader: {
    //alignSelf: 'flex-start',
    height: 50,
  },
  screenHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 50,
    textAlign: 'center',
  },
});

export default App;
