import { useContext } from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Ubication from "./components/Ubication";
import Footer from "./components/Footer";
import Rights from "./components/Rights";
import FormReservation from "./components/FormReservation";
import { ReservationContext } from "./context/ReservationContext";
import "./App.css";

function App() {
  const { reservation, setReservation } = useContext(ReservationContext);
  const visitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);

  const showFirstScreen = visitCount < 2;

  if (showFirstScreen) {
    localStorage.setItem("visitCount", visitCount + 1);
  }

  return (
    <div className="container">
      {showFirstScreen && <FirstScreen />}
      <Header />
      <Home />
      <Menu />
      {reservation && <FormReservation />}
      <Ubication />
      <Footer />
      <Rights />
    </div>
  );
}

export default App;
