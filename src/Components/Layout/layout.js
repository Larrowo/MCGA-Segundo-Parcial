import React from "react";
import Footer from "../Footer/index.js";
import Header from "../Header/index.js";
import styles from "./layout.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../../screens/products/index.js";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/home" />
        <Route path="/products" component={Products} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
