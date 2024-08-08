import React from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="container">
      <FirstScreen />
      <Header />
      <Home />
    </div>
  );
}

export default App;
