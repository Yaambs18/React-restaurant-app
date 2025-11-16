import { useContext } from "react";
import Modal from "../UI/Modal";

import "./Cart.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItems = <ul className="cart-items">
        <li className="cart-item">
            <b>Name</b>
            <b>Price x Quantity</b>
        </li>
        { cartCtx.items.map(item => {
            return <li key={item.id} className="cart-item">
                <div>
                    {item.name}
                </div>
                <div>
                    {item.price} x {item.amount}
                </div>
            </li>
        }) }
    </ul>
    return (
        <Modal onClose={props.onCartClick}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onCartClick}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;