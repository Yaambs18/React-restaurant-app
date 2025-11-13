import "./AvailableMeals.css";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza with fresh basil.",
    price: 299
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Creamy tomato gravy with soft paneer cubes, served with naan.",
    price: 249
  },
  {
    id: 3,
    name: "Veg Biryani",
    description: "Aromatic basmati rice cooked with mixed vegetables and spices.",
    price: 199
  },
  {
    id: 4,
    name: "Grilled Chicken",
    description: "Juicy grilled chicken breast served with roasted veggies.",
    price: 349
  },
  {
    id: 5,
    name: "Pasta Alfredo",
    description: "Creamy white sauce pasta with mushrooms and herbs.",
    price: 279
  }
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
    return (
        <section className="meals">
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}

export default AvailableMeals;