import "./MealItem.css"
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const mealsList = props.mealsList.map(meal => {
        return (
            <li key={meal.id} className="meal">
                <div>
                    <h3>{meal.name}</h3>
                    <span className="description">{meal.description}</span>
                    <div className="price">{meal.price}</div>
                </div>
                <MealItemForm />
            </li>
        )
    })

    return mealsList;
}

export default MealItem;