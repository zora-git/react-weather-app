import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3 ">
              <input
                type="submit"
                value="Search"
                className="d-none d-md-block search"
              />
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <h3>
          <FormattedDate date={weatherData.date} />
        </h3>

        <div className="row details">
          <div className="col-md-6 main-column">
            <div className="row main-section">
              <div className="col-md-6 icon-column">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="main-icon"
                />
              </div>

              <div className="col-6 temp-column">
                <div class="row ">
                  <div className="col-9 main-temp">
                    {Math.round(weatherData.temperature)}
                  </div>
                  <div className="col-3 unit">
                    <div class="row celcius">°C</div>
                    <div class="row fahrenheit">°F</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 description-column">
            <h4 className="text-capitalize">{weatherData.description}</h4>
            <ul className="description-list">
              <li>Visibility: {weatherData.visibility / 1000} km</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b40b135798f82a05aed08769f9275f50";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
