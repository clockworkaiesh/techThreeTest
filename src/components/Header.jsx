import { useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import logoutIcon from "../assets/logout-icon.svg";

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="logo-holder">
        <img src={logo} alt="logo" />
      </div>

      {location.pathname === "/dashboard" && (
        <div className="wallet-key-display">
          <p>0xec505c81d6a7567b5bde804870b1038832fe6da1</p>

          <div className="ico">
            <img src={logoutIcon} alt="logout" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
