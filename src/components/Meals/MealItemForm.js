import Input from "../UI/Input";
import "./MealItemForm.css";

const MealItemForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Add clicked');
    }

    return (
        <form className="form" >
            <Input label="Amount" input={{id: 'amount', type: 'number', min: '1', max: '5', step: '1'}} />
            <button onClick={submitHandler}>+Add</button>
        </form>
    )
}

export default MealItemForm;