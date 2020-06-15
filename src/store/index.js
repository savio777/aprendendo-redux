import { createStore } from 'redux';

function reducer() {
  return [
    { id: 1, title: 'Salgados' },
    { id: 1, title: 'Almoço' },
    { id: 1, title: 'Sorvetes' },
    { id: 1, title: 'Pizzas' },
  ];
}

const store = createStore(reducer);

export default store;
