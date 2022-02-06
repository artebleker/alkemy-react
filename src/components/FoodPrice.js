import React, {useState, useEffect} from "react";
import Axios from "axios";
const FoodPrice = (props) => {
  const [price, setPrice] = useState("");

  const APPI_KEY = "56198b04e0c94f2db85ea8c2288b8d2c";
  const URL = `https://api.spoonacular.com/recipes/${props.idPrice}/priceBreakdownWidget.json?apiKey=${APPI_KEY}`;

  useEffect(async () => {
    const result = await Axios.get(URL);
    setPrice(result.data.totalCost);
  });

  return (
    <div>
      <h4 className="fs-4">$ {price}</h4>
    </div>
  );
};

export default FoodPrice;
