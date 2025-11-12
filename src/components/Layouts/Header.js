import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import "./header.css";

const Header = () => {

  return (
    <Fragment>
      <header className="header">
        <h3>ReactMeals</h3>
        <HeaderCartButton className="cart" />
      </header>
      <img className="header-image" src="meals.jpg" alt="A table full of delicious food!" />
    </Fragment>
  )
}

export default Header;