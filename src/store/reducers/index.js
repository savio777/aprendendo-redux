import { combineReducers } from 'redux';

import category from './category';
import cart from './cart';
import products from './products';

export default combineReducers({
  category,
  cart,
  products,
});
