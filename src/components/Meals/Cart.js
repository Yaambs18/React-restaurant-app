import Modal from "../UI/Modal";

import "./Cart.css";

const Cart = (props) => {
    const cartItems = <ul className="cart-items">
        { [{id: 1, name: 'Pizza', amount: 200.00 }].map(item => {
            return <li key={item.id}>{item.name}</li>
        }) }
    </ul>
    return (
        <Modal onClose={props.onCartClick}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>200</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onCartClick}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;