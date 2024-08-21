import { useContext } from "react";
import { RequestContext } from "../context/ResquestResponse";

function ResponseWindow({ img, text }) {
  const { setResponseMessage } = useContext(RequestContext);

  const handleCloseMsg = () => {
    setResponseMessage(null);
  };

  return (
    <section className="fetchResponse" onClick={handleCloseMsg}>
      <div className="fetchResponse__content">
        <img src={img} alt="img of img" className="fetchResponse__img" />
        <h1 className="fetchResponse__text">{text}</h1>
      </div>
    </section>
  );
}

export default ResponseWindow;
