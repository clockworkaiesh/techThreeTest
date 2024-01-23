import { useState } from "react";
import { PrimaryButton } from "./components/utilities/Buttons";
import logo from "./assets/logo.svg";
import houndSwap from "./assets/houndSwap.svg";
import DropDown from "./components/utilities/DropDown";
import SelectBox from "./components/utilities/SelectBox";
import Popup from "./components/utilities/Popup";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [privateKey, setPrivateKey] = useState("");

  const handleButtonClick = () => {
    const newPrivateKey =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setPrivateKey(newPrivateKey);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="wrapper">
        <div className="card">
          <div className="card-head">
            <div className="brand">
              <img src={logo} alt="" />
              <h1>HoundSwap</h1>
            </div>
          </div>
          <div className="card-inner">
            <div className="payment-info">
              <div className="card-inner-block">
                <div className="left-col">
                  <h4>You pay</h4>
                  <h2>2.35</h2>
                </div>

                <div className="right-col">
                  <DropDown />
                </div>
              </div>
              <div className="hound-swap">
                <img src={houndSwap} alt="" />
              </div>
              <div className="card-inner-block">
                <div className="left-col">
                  <h4>You receive</h4>
                  <h2 className="disabled">0</h2>
                </div>

                <div className="right-col">
                  <SelectBox />
                </div>
              </div>
            </div>

            <PrimaryButton
              buttonText="GENERATE PRIVATE KEY"
              onClick={handleButtonClick}
              isDisabled={false}
              classname="btn-transition"
            />
          </div>
        </div>

        {showPopup && (
          <Popup privateKey={privateKey} onClose={handleClosePopup} />
        )}
      </div>
    </>
  );
}

export default Home;
