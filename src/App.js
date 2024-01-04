import './App.css';

import React from "react";
import Body from './components/Body.js';
import Header from "./components/Header.js";
import store from './utils/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cart from './components/Cart.js';
import Home from './components/Home.js';
import Error from './components/Error.js';

//main App



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}



export default App;
