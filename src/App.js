import React from 'react';
import { Provider } from 'react-redux';

import './css/bulma.min.css';
import './css/custom.css';

import store from './store';

import Navbar from './components/Navbar';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Category />
      </Provider>
    </div>
  );
}

export default App;
