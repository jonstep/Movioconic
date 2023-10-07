export const Action = {
  HYDRATE: 'hydrate',
  ADD_QUOTE: 'add-quote',
  REMOVE_QUOTE: 'remove-quote',
  SAVE_QUOTES: 'save-quotes',
};

export const QuoteReducer = (state, action) => {
  switch (action.type) {
    case Action.HYDRATE: {
      return action.payload;
    }
    case Action.ADD_QUOTE: {
      return [...state, action.quote];
    }
    case Action.REMOVE_QUOTE: {
      return state.filter(quote => quote.id !== action.data.id);
    }
    case Action.SAVE_QUOTES: {
      return action.data;
    }
    default:
      return state;
  }
};
