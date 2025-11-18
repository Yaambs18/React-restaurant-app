import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems  = [...state.items];
        const itemIndex = updatedItems.findIndex(item => item.id == action.item.id)

        if (itemIndex !== -1) {
            updatedItems[itemIndex] = {
                ...updatedItems[itemIndex],
                amount: updatedItems[itemIndex].amount + action.item.amount
            }
        } else {
            updatedItems.push(action.item);
        }
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }
    else if (action.type === 'REMOVE') {
        let updatedItems = [...state.items];
        const itemIndex = updatedItems.findIndex(item => action.id===item.id)
        const newTotalAmount = state.totalAmount - updatedItems[itemIndex].price;
        if (updatedItems[itemIndex].amount === 1) {
            updatedItems.splice(itemIndex,1);
        } else {
            updatedItems[itemIndex] = {
                ...updatedItems[itemIndex],
                amount : updatedItems[itemIndex].amount-1
            }
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = item => {
        dispatchCartAction({ type: 'ADD', item });
    };

    const removeItemFromCart = id => {
        dispatchCartAction({ type: 'REMOVE', id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;