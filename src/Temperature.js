import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div class="row ">
        <div className="col-9 main-temp">{Math.round(props.celcius)}</div>
        <div className="col-3 unit">
          <div className="row celcius">°C</div>
          <div className="row fahrenheit">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div class="row ">
        <div className="col-9 main-temp">{Math.round(fahrenheit)}</div>
        <div className="col-3 unit">
          <div className="row celcius">
            <a href="/" onClick={showCelcius}>
              °C
            </a>
          </div>
          <div className="row fahrenheit">°F</div>
        </div>
      </div>
    );
  }
}
