import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://hjp-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          HJ Park
        </a>{" "}
        and is {""}
        <a
          href="https://github.com/zora-git/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
