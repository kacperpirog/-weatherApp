import React from "react";
import { useContext } from "react";
import AppContextWeather from "../../contex/context";

const ShowWind = () => {
  const { weather } = useContext(AppContextWeather);
  return (
    <ul>
      <h1> Wind</h1>

      {weather && weather.wind && <li>{weather.wind.speed} m/s</li>}
    </ul>
  );
};

export default ShowWind;
