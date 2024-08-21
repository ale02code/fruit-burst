import { useContext, useEffect } from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Ubication from "./components/Ubication";
import Footer from "./components/Footer";
import Rights from "./components/Rights";
import FormReservation from "./components/FormReservation";
import ResponseWindow from "./components/ResponseWindow";
import { ReservationContext } from "./context/ReservationContext";
import { RequestContext } from "./context/RequestContext";
import CheckImg from "./assets/icons/check.png";
import NoCheckImg from "./assets/icons/no-check.png";
import "./App.css";

function App() {
  const { reservation } = useContext(ReservationContext);
  const { isRequestSuccessful, setIsRequestSuccessful } =
    useContext(RequestContext);
  const visitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);

  const showFirstScreen = visitCount < 2;

  if (showFirstScreen) {
    localStorage.setItem("visitCount", visitCount + 1);
  }

  useEffect(() => {
    // Reinicia el estado de isRequestSuccessful si es necesario
    const timer = setTimeout(() => {
      setIsRequestSuccessful(null); // Resetea después de mostrar el mensaje
    }, 3000); // 3 segundos de espera, ajusta según tus necesidades

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, [reservation, setIsRequestSuccessful]);

  return (
    <div className="container">
      {showFirstScreen && <FirstScreen />}
      <Header />
      {isRequestSuccessful !== null && (
        <ResponseWindow text={"SUCCESS"} img={CheckImg} />
      )}
      {reservation && <FormReservation />}
      <Home />
      <Menu />
      <Ubication />
      <Footer />
      <Rights />
    </div>
  );
}

export default App;
