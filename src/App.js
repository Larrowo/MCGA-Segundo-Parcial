import "./App.css";
import Layout from "./Components/Layout/layout.js";

import store from "./store";
import SharedForm from "./sharedForm";


function App() {
  const state = store.getState();

  const addProduct = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
    </Layout>
  );
}

export default App;
