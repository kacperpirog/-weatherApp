import React from "react";
import { useContext } from "react";
import AppContextWeather from "../../contex/context";

const ShowTemp = () => {
  const { weather } = useContext(AppContextWeather);
  const { temp_max, temp_min } = weather.main;
  return (
    <ul>
      <h1>pogoda {weather.name} </h1>
      <li>{temp_max}</li>
      <li>{temp_min}</li>
    </ul>
  );
};

export default ShowTemp;
