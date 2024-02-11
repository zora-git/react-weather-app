import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weather() {
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
      <h1>Seoul</h1>
      <h3>Wednesday 7:00</h3>

      <div className="row details">
        <div className="col-md-6 main-column">
          <div className="row main-section">
            <div className="col-md-6 icon-column">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
                className="main-icon"
              />
            </div>

            <div className="col-6 temp-column">
              <div class="row ">
                <div className="col-9 main-temp">54</div>
                <div className="col-3 unit">
                  <div class="row celcius">°C</div>
                  <div class="row fahrenheit">°F</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 description-column">
          <h4>Mostly Cloudy</h4>
          <ul className="description-list">
            <li>Precipitation:15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
