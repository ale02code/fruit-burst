import { useContext } from "react";
import { RequestContext } from "../context/RequestContext";

function ResponseWindow({ img, text }) {
  const { setIsRequestSuccessful } = useContext(RequestContext);

  const handleCloseMsg = () => {
    setIsRequestSuccessful(false);
  };

  return (
    <section className="fetchResponse" onClick={handleCloseMsg}>
      <div className="fetchResponse__content">
        <img src={img} alt="response image" className="fetchResponse__img" />
        <h1 className="fetchResponse__text">{text}</h1>
      </div>
    </section>
  );
}

export default ResponseWindow;
