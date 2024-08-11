import React from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Ubication from "./components/Ubication";
import "./App.css";

function App() {
  return (
    <div className="container">
      <FirstScreen />
      <Header />
      <Home />
      <Menu />
      <Ubication />
    </div>
  );
}

export default App;
