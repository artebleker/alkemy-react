import React from "react";
import FoodHealthScore from "./FoodHealthScore";
import FoodPrice from "./FoodPrice";
const FoodDetail = (props) => {
  

  return (
    <div className="container container-fluid">
     <FoodPrice idPrice={props.idFood}/> 
     <FoodHealthScore idHealth={props.idFood} />
    </div>
  );
};

export default FoodDetail;
