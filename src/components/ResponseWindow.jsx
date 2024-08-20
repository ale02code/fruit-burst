import { useState } from "react";

function ResponseWindow({ img, text }) {
  return (
    <div className="fetchResponse">
      <img src={img} alt="img of img" className="fetchResponse__img" />
      <h1 className="fetchResponse__text">{text}</h1>
    </div>
  );
}

export default ResponseWindow;
