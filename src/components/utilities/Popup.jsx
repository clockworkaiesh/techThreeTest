/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "./Buttons";

function Popup({ privateKey, onClose }) {
  const navigate = useNavigate();
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleContinueClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-body" onClick={stopPropagation}>
        <h1 className="popup-title">ENTER YOUR PRIVATE KEY</h1>
        <input type="text" value={privateKey} readOnly />
        <SecondaryButton buttonText="CONTINUE" onClick={handleContinueClick} />
      </div>
    </div>
  );
}

export default Popup;
