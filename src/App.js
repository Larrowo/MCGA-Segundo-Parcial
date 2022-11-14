import React from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Layout from "./components/Layout/layout.js";


import Products from './screens/products';
import Test from './screens/test';

import store from "./Redux/store";
// import SharedForm from "./sharedForm";


function App() {
  const state = store.getState();

  const addProduct = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </Layout>
  );

}

export default App;
