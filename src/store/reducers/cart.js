const INITIAL_STATE = {
  lista: [],
  value: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === 'SET_PRODUCT_ACTIVE') {
    return {
      lista: [...state.lista, action.product],
      value: state.value + action.product.value,
    };
  }

  return state;
}
