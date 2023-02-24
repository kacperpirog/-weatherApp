import React, { useState, useEffect } from "react";
import axios from "axios";
import AppContextWeather from "./contex/context.js";
import ShowWind from "./components/ShowWind/ShowWind.js";
import ShowTemp from "./components/ShowTemp/ShowTemp.js";
import SearchWeatherForm from "./components/SearchWeatherForm/SearchWeatherForm.js";
import ShowWeater from "./components/ShowWeather/ShowWeather.js";
import GlobalStyles from "./globalStyled/GlobalStyledSss.js";
import { StyledApp } from "./StyledApp.js";

const App = () => {
  const [weather, setWeather] = useState({ main: {} });
  const [iconWeater, setIconWeater] = useState("");
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);

  const searchWeatherCity = (e) => {
    e.preventDefault();
    const cityName = e.target.cityName.value;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${cityName}&country=PL&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res, "cityName");
        setWeather(res.data.list[0]);
        setIconWeater(res.data.list[0].weather[0].icon);
        setShowWeatherDetails(weather);
        console.log(res.data.list[0].weather[0].icon, "ImgIcon");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setShowWeatherDetails();
  }, [weather]);

  return (
    <div>
      <AppContextWeather.Provider
        value={{
          searchWeatherCity,
          weather,
          iconWeater,
        }}
      >
        <GlobalStyles />
        <StyledApp>
          <SearchWeatherForm />
          {showWeatherDetails && (
            <>
              <ShowWeater />
              <ShowWind />
              <ShowTemp />
            </>
          )}
        </StyledApp>
      </AppContextWeather.Provider>
    </div>
  );
};

export default App;
