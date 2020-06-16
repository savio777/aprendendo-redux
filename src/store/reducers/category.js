const INITIAL_STATE = {
  category: [
    { id: 1, title: 'Salgados' },
    { id: 2, title: 'Almoço' },
    { id: 3, title: 'Sorvetes' },
    { id: 4, title: 'Pizzas' },
    { id: 5, title: 'Bebidas' },
  ],
  categorySelect: null,
};

export default function category(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === 'SET_CATEGORY_ACTIVE') {
    return {
      ...state,
      categorySelect: action.category,
    };
  }

  return state;
}
