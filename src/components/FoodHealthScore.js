import React, { useState, useEffect } from "react";
import Axios from "axios";
const FoodHealthScore = (props) => {
  const [health, setHealth] = useState("");

  const APPI_KEY = "56198b04e0c94f2db85ea8c2288b8d2c";
  const URL = `https://api.spoonacular.com/recipes/${props.idHealth}/nutritionWidget.json?apiKey=${APPI_KEY}`;

  useEffect(async () => {
    const result = await Axios.get(URL);
    setHealth(result);
    console.log(health)
  });

  return (
    <div>
      <h4 className="fs-4 ">Health Score</h4>
      <od className="list-group list-group-flush">
        <li className="fs-5 list-group-item">Calorias: {health.calories}</li>
        <li className="fs-5 list-group-item">Carbohidratos: {health.carbs}</li>
        <li className="fs-5 list-group-item">Grasas: {health.fat}</li>
        <li className="fs-5 list-group-item">Proteinas: {health.protein}</li>
      </od>
    </div>
  );
};

export default FoodHealthScore;
