import React, {useContext, useRef, useState} from 'react';
import {
  Alert,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {QuoteContext} from '../../contexts/QuoteContext';
import {Action} from '../../reducers/QuoteReducer';

export const AddQuote = () => {
  const {quotes, dispatch} = useContext(QuoteContext);
  const [quote, setQuote] = useState('');
  const [movie, setMovie] = useState('');
  const quoteInput = useRef(null);
  const movieInput = useRef(null);

  const showMaximumCharacterAlert = value => {
    // Validate quote text length
    if (value.length < 150) {
      setQuote(value);
    } else {
      Alert.alert(
        'Unable to save',
        'You have reached the Free Tier maximum limit of 150 characters per quote. Please ugrade your account to Premium',
        [{text: 'OK'}],
      );
    }
  };

  const saveQuote = () => {
    if (!quote) {
      // Validate quote text provided
      Alert.alert('Unable to save', 'Please add a movie quote', [{text: 'OK'}]);
    } else if (
      quotes.some(function (check) {
        return check.text === quote;
      })
    ) {
      // Validate quote text has not already been added
      Alert.alert('Unable to save', 'Quote already added', [{text: 'OK'}]);
    } else if (quotes.length >= 5) {
      // Validate max limit of quotes has been reached
      Alert.alert(
        'Unable to save',
        'You have reached the Free Tier maximum limit of 5 quotes. Please ugrade your account to Premium',
        [{text: 'OK'}],
      );
    } else {
      dispatch({
        type: Action.ADD_QUOTE,
        quote: {
          text: quote,
          movie: movie,
          id: uuidv4(),
        },
      });
      setMovie('');
      setQuote('');
      quoteInput.current.blur();
      movieInput.current.blur();
    }
  };
  return (
    <View style={styles.addQuoteContainer}>
      <TextInput
        maxLength={150}
        multiline={true}
        onChangeText={value => showMaximumCharacterAlert(value)}
        placeholder="Movie quote (required)"
        ref={quoteInput}
        style={styles.quoteInput}
        value={quote}
      />
      <TextInput
        onChangeText={value => setMovie(value)}
        value={movie}
        maxLength={70}
        placeholder="Movie name (optional)"
        ref={movieInput}
        style={styles.movieInput}
      />
      <TouchableOpacity onPress={saveQuote} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Add quote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addQuoteContainer: {
    backgroundColor: 'yellow',
    height: 210,
    paddingTop: 20,
  },
  quoteInput: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    height: 70,
    marginHorizontal: 10,
    padding: 10,
  },
  movieInput: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 10,
  },
  submitButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 4,
    marginHorizontal: 10,
    padding: 10,
  },
  submitButtonText: {
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
