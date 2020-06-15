import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import './css/bulma.min.css';
import './css/custom.css';

import store from './store';

import Navbar from './components/Navbar';

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
      </Provider>
    </div>
  );
}

export default App;
