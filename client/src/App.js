import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerList from "./components/PlayerList";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="App">
      <button onClick={() => setDarkMode(!darkMode)}>
        Dark Mode {darkMode ? "on" : "off"}
      </button>
      <PlayerList />
    </div>
  );
}

export default App;
