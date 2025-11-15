import { Fragment } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Meals/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Cart />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
