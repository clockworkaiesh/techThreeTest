import { useState } from "react";
import eth from "../../assets/eth-icon.svg";
import cnd from "../../assets/cnd-icon.svg";
import pepe from "../../assets/pepe-icon.svg";
import toggle from "../../assets/dropdown-icon-green.svg";

function SelectBox() {
  const coins = [
    { icon: eth, name: "Eth" },
    { icon: cnd, name: "CDN" },
    { icon: pepe, name: "PEPE" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown primary">
      <button onClick={handleToggle} className="dropdown-button">
        {typeof selectedOption === "string" ? (
          selectedOption
        ) : (
          <>
            <img src={selectedOption.icon} alt="" />
            {selectedOption.name}
          </>
        )}
        <img
          src={toggle}
          alt=""
          className={`dropdown-toggle-icon ${isOpen ? "rotate" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {coins.map((coin, index) => (
            <button
              key={index}
              onClick={() => handleSelect(coin)}
              className="dropdown-item"
            >
              <img src={coin.icon} alt="" />
              {coin.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectBox;
