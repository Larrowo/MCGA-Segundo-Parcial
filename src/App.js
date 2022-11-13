import "./App.css";
import store from "./store";
import SharedForm from "./sharedForm";

function App() {
  const state = store.getState();

  const addProduct = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <SharedForm></SharedForm>
      <ul>
        {state.map((product) => {
          return <li key={product.id}>{product.description}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
