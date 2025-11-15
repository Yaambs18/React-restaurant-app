import Modal from "../UI/Modal";

import "./Cart.css";

const Cart = (props) => {
    const cartItems = <ul className="cart-items">
        { [{id: 1, name: 'Pizza', amount: 200.00 }].map(item => {
            return <li>{item.name}</li>
        }) }
    </ul>
    return (
        <Modal>
            {cartItems}
            <div className="total">
                <sapn>Total Amount</sapn>
                <sapn>200</sapn>
            </div>
            <div className="actions">
                <button className="button--alt">Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;