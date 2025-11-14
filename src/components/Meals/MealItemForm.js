import "./MealItemForm.css";

const MealItemForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Add clicked');
    }

    return (
        <form className="form" >
            <div>
                <label>Amount</label>
                <input type="number" step={1} min={1}/>
            </div>
            <button onClick={submitHandler}>+Add</button>
        </form>
    )
}

export default MealItemForm;