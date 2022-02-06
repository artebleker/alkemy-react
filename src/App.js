import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Food from "./components/Food";
const App = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState([]);
  const [alert, setAlert] = useState("");

  const APPI_KEY = "56198b04e0c94f2db85ea8c2288b8d2c";

  const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APPI_KEY}`;

  const onChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value);
  };

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(URL);
      if (result.data.results < 1) {
        return setAlert("No food with such name");
      }
      setFood(result.data.results);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
    <h1 className="fs-1 text-center">Menu de comida</h1>
      <form onSubmit={onSubmit} className="container container-fluid d-flex">
        {alert !== "" && (
          <div>
            <h3>{alert}</h3>
          </div>
        )}
        <input
          className="border border-primary border-2 rounded-2"
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" className="btn btn-info"/>
      </form>
      <div className="container container-fluid">{food.length > 1 && food.map((food) => <Food key={Math.random()*100+5} food={food} />)}</div>
    </>
  );
};
export default App;

