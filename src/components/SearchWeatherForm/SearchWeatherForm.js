import React from "react";
import { useContext } from "react";
import AppContextWeather from "../../contex/context";
import { StyledFormWeather } from "./StyledSearchForm";

const SearchWeatherForm = () => {
  const { searchWeatherCity } = useContext(AppContextWeather);
  return (
    <StyledFormWeather>
      <div>
        <form onSubmit={searchWeatherCity}>
          <input
            type="search"
            placeholder="Check the weather in your city"
            name="cityName"
          ></input>

          <button type="submit">search</button>
        </form>
      </div>
    </StyledFormWeather>
  );
};

export default SearchWeatherForm;
