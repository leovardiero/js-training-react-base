import { createStore } from 'redux';

const initialState = {
  buttonClicked: false,
};

const reducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
