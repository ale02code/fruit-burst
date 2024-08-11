import "../styles/InstagramButton.css";
import Instagram from "../assets/icons/instagram.svg";

function InstagramButton() {
  return (
    <div className="instagram">
      <img className="instagram__logo" src={Instagram} alt="Instagram Icon" />
    </div>
  );
}

export default InstagramButton;
