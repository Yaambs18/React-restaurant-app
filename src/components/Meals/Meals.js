import SummaryCard from "./SummaryCard";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
    return (
        <Fragment>
            <SummaryCard />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;