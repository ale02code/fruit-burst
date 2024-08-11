import React from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Ubication from "./components/Ubication";
import Footer from "./components/Footer";
import Rights from "./components/Rights";
import "./App.css";

function App() {
  return (
    <div className="container">
      <FirstScreen />
      <Header />
      <Home />
      <Menu />
      <Ubication />
      <Footer />
      <Rights />
    </div>
  );
}

export default App;
