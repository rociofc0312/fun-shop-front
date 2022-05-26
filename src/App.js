import React from "react";
import { CategoriesContextProvider } from "./context/CategoriesContext";
import { CartContextProvider } from "./context/CartContext";
import BaseContainer from "./containers/BaseContainer/BaseContainer";
import "./normalize.css";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";

const App = () => (
  <div className="App">
    <AuthContextProvider>
      <CategoriesContextProvider>
        <CartContextProvider>
          <BaseContainer />
        </CartContextProvider>
      </CategoriesContextProvider>
    </AuthContextProvider>
  </div>
);

export default App;
