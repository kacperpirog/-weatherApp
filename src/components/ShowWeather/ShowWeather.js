import React from "react";
import { useContext } from "react";
import AppContextWeather from "../../contex/context";
import { endUrlIcon, imgIcon } from "../../static/iconUrls";

const ShowWeater = () => {
  const { iconWeater, weather } = useContext(AppContextWeather);
  console.log(iconWeater);
  return (
    <ul>
      <img src={`${imgIcon}${iconWeater}${endUrlIcon}`} alt={weather.name} />
    </ul>
  );
};

export default ShowWeater;
