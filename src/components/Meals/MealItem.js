import "./MealItem.css"

const MealItem = (props) => {
    const mealsList = props.mealsList.map(meal => {
        return (
            <li key={meal.id} className="meal">
                <h3>{meal.name}</h3>
                <span className="description">{meal.description}</span>
                <div className="price">{meal.price}</div>
            </li>
        )
    })

    return mealsList;
}

export default MealItem;