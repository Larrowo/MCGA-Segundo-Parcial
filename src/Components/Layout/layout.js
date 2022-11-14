import React from "react";
import Footer from "../Footer/index.js";
import Header from "../Header/index.js";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
