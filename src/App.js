import { useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Meals/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [isCartOpen, setCartOpen] = useState(false);

  const cartClickHandler = () => {
    setCartOpen(!isCartOpen);
  }

  return (
    <CartProvider>
      <Header onCartClick={cartClickHandler}/>
      <main>
        { isCartOpen && <Cart onCartClick={cartClickHandler}/> }
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
