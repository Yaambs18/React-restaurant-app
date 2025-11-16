import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import "./header.css";

const Header = (props) => {

  return (
    <Fragment>
      <header className="header">
        <h3>ReactMeals</h3>
        <HeaderCartButton className="cart" onCartClick={props.onCartClick} />
      </header>
      <div className="main-image">
        <img className="header-image" src="meals.jpg" alt="A table full of delicious food!" />
      </div>
    </Fragment>
  )
}

export default Header;