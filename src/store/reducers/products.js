const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: 'Coxinha',
      type: 1,
      url_image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.terra.com.br%2Fvida-e-estilo%2Fculinaria%2Ftudogostoso%2Fmassa-de-coxinha-simples-e-facil-confira-a-receita%2C46376d7f32544596d5922a3785be2677rsssk9mp.html&psig=AOvVaw1ut-R1s3Dg4yhtdcYESu_b&ust=1592364116264000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOC-ht6wheoCFQAAAAAdAAAAABAD',
      value: 2.12,
    },
    {
      id: 2,
      name: 'Salada',
      type: 2,
      url_image:
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      value: 10.0,
    },
    {
      id: 3,
      name: 'Chocolate',
      type: 3,
      url_image:
        'https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      value: 21.16,
    },
    {
      id: 4,
      name: 'Calabresa',
      type: 4,
      url_image:
        'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      value: 12.62,
    },
    {
      id: 5,
      name: 'Queijo',
      type: 4,
      url_image:
        'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      value: 18.12,
    },
    {
      id: 6,
      name: 'Pepperoni',
      type: 4,
      url_image:
        'https://images.unsplash.com/photo-1554136812-8b7875b188b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      value: 9.16,
    },
  ],
};

export default function product(state = INITIAL_STATE, action) {
  console.log(action);
  //if (action.type === 'SET_PRODUCT_ACTIVE') {}

  return state;
}
