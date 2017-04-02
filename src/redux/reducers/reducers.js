import { combineReducers } from 'redux';

const initialState = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const App = combineReducers({
  initialState
});

export default App;
