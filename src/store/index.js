import { createStore } from 'redux';

const INITIAL_STATE = {
  category: [
    { id: 1, title: 'Salgados' },
    { id: 2, title: 'Almoço' },
    { id: 3, title: 'Sorvetes' },
    { id: 4, title: 'Pizzas' },
  ],
  categorySelect: null,
  valueCartMarket: 0,
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === 'SET_CATEGORY_ACTIVE') {
    return {
      ...state,
      categorySelect: action.category,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
