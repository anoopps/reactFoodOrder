import { useState, useEffect } from "react";
import React from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();      
      setMeals(meals);
    }
    getMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );


}
