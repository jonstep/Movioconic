import React, {useContext, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QuoteContext} from '../../contexts/QuoteContext';
import {Action} from '../../reducers/QuoteReducer';

export const QuoteList = () => {
  const {quotes, dispatch} = useContext(QuoteContext);
  const flatListRef = useRef(null);

  const titleText = () => {
    if (quotes.length > 1) {
      return '(Press and drag to reorder)';
    } else if (!quotes.length) {
      return 'Add your favourite quotes';
    }
  };

  const saveQuotes = data => {
    dispatch({
      type: Action.SAVE_QUOTES,
      data: data,
    });
  };

  const deleteQuote = quote => {
    dispatch({
      type: Action.REMOVE_QUOTE,
      data: quote,
    });
  };

  const renderItem = ({item, drag, isActive}) => {
    return (
      <TouchableOpacity
        onLongPress={drag}
        //disabled={isActive}
        style={[
          styles.listItem,
          {
            backgroundColor: isActive ? 'orange' : 'yellow',
          },
        ]}>
        <Text style={styles.listItemMovieQuote}>"{item.text}"</Text>
        {item.movie && (
          <Text style={styles.listItemMovieTitle}>from {item.movie}</Text>
        )}
        <TouchableOpacity onPress={quote => deleteQuote(item)}>
          <Text style={styles.listItemMovieRemove}>Remove Quote</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView style={styles.listContainer}>
      {titleText() && <Text style={styles.listTitle}>{titleText()}</Text>}
      <DraggableFlatList
        scrollEnabled={true}
        data={quotes}
        onContentSizeChange={() => {
          flatListRef.current.scrollToEnd({animated: true});
        }}
        ref={flatListRef}
        onDragEnd={({data}) => saveQuotes(data)}
        keyExtractor={(x, i) => i.toString()}
        renderItem={renderItem}
        style={styles.list}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    height: 20,
    textAlign: 'center',
  },
  listItem: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  listItemMovieQuote: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItemMovieTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  listItemMovieRemove: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'right',
  },
});
