import React from "react";
import "./Weather.css";

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
          <div className="col-3">
            <input type="submit" value="Search" className="search" />
          </div>
        </div>
      </form>
      <h1>Seoul</h1>
      <h3>Wednesday 7:00</h3>

      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
                className="main-icon"
              />
            </div>
            <div className="col-4 main-temp">54</div>

            <div className="col-4 unit">
              <div className="row celcius">°C</div>
              <div className="row fahrenheit">°F</div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <h4>Mostly Cloudy</h4>
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
