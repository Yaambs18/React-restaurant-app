import { Fragment, useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Meals/Cart";

function App() {

  const [isCartOpen, setCartOpen] = useState(false);

  const cartClickHandler = () => {
    console.log('clicked');
    setCartOpen(!isCartOpen);
  }

  return (
    <Fragment>
      <Header onCartClick={cartClickHandler}/>
      <main>
        { isCartOpen && <Cart onCartClick={cartClickHandler}/> }
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
