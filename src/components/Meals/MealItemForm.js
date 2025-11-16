import { useContext } from "react";
import Input from "../UI/Input";
import "./MealItemForm.css";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
    const item = props.item;

    const cartCtx = useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('added');
        item.amount = +event.target.form.amount.value
        cartCtx.addItem(item)
    }

    return (
        <form className="form" >
            <Input label="Amount" input={{id: 'amount', type: 'number', min: '1', max: '5', step: '1'}} />
            <button onClick={submitHandler}>+Add</button>
        </form>
    )
}

export default MealItemForm;