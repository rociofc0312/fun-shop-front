import React from 'react';
import { CategoriesContextProvider } from './context/CategoriesContext';
import { CartContextProvider } from './context/CartContext';
import BaseContainer from './containers/BaseContainer/BaseContainer';
import './normalize.css';
import './App.css';

const App = () => (
  <div className="App">
    <CategoriesContextProvider>
      <CartContextProvider>
        <BaseContainer />
      </CartContextProvider>
    </CategoriesContextProvider>
  </div>
)

export default App;
