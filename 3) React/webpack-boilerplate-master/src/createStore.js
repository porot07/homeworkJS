import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

export default (initialState) => {
  const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT': return state + 5;
      case 'DECREMENT': return state - 8;
      default: return state;
    }
  };

  const rootReducer = combineReducers({
    reducer, formReducer,
  });

  return createStore(rootReducer, initialState);
};
