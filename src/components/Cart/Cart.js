import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import "./Cart.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasCartItems = cartCtx.items.length > 0;

    const addHandler = (item) => {
        const tempItem = {...item, amount: 1}
        cartCtx.addItem(tempItem);
    }

    const removeHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className="cart-items">
        { cartCtx.items.map(item => {
            return <CartItem 
                        key={item.id}
                        name={item.name} 
                        price={item.price} 
                        amount={item.amount} 
                        onAdd={addHandler.bind(null, item)} 
                        onRemove={removeHandler.bind(null, item.id)} 
                    />
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
                { hasCartItems && <button className="button">Order</button> }
            </div>
        </Modal>
    )
}

export default Cart;