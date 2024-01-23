import { PrimaryButton } from "./components/utilities/Buttons";
import logo from "./assets/logo.svg";
import houndSwap from "./assets/houndSwap.svg";
import DropDown from "./components/utilities/DropDown";
import SelectBox from "./components/utilities/SelectBox";
import gearIcon from "./assets/gear-icon.svg";
import eth from "./assets/eth-icon.svg";
import cnd from "./assets/cnd-icon.svg";
import pepe from "./assets/pepe-icon.svg";

function Dashboard() {
const coins = [
  {
    name: "Eth",
    icon: eth,
    worth: (0.3).toLocaleString(),
    usdtWorth: (672.32).toLocaleString(),
  },
  {
    name: "CND",
    icon: cnd,
    worth: (999400).toLocaleString(),
    usdtWorth: (153.2).toLocaleString(),
  },
  {
    name: "PEPE",
    icon: pepe,
    worth: (124512484).toLocaleString(),
    usdtWorth: (72.32).toLocaleString(),
  },
];
const trades = [
  {
    entrytValue: "0.1",
    entryUsdt: "220.17",
    coin: "PEPE",
    profit: 3,
    currentValue: "0.32",
    currentUsdt: "720.17",
  },
  {
    entrytValue: "0.07",
    entryUsdt: "153.20",
    coin: "CND",
    profit: 0,
    currentValue: "0.07",
    currentUsdt: "153.20",
  },
];
  return (
    <>
      <div className="wrapper">
        {/* holdings */}
        <div className="card panel-card">
          <div className="panel-head">
            <h3 className="panel-title">Holdings</h3>
            <div className="right">
              <p className="est-value">$1,125</p>
              <p className="est-text">Estimated Value</p>
            </div>
          </div>
          <div className="seperator"></div>
          {/* list of coins */}
          <div className="holding-coin-info">
            {coins.map((coin, index) => (
              <div className="crypto-coin" key={index}>
                  <div className="coin-name">
                    <img src={coin.icon} alt="" />
                    <p>{coin.name}</p>
                  </div>
                  <div className="coin-total">
                    <p className="crypto-worth">{coin.worth}</p>
                    <p className="usdt-worth">${coin.usdtWorth}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <div className="brand">
              <img src={logo} alt="" />
              <h1>HoundSwap</h1>
            </div>
            <div className="mev-safe">
              <p>
                <span>MevSafe</span> 50% Slippage
              </p>
              <img src={gearIcon} alt="" />
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
                  <h2>0</h2>
                </div>

                <div className="right-col">
                  <SelectBox />
                </div>
              </div>
            </div>

            <PrimaryButton buttonText="SELECT A TOKEN" isDisabled={true}/>
          </div>
        </div>
        {/* active trades */}
        <div className="card panel-card">
          <div className="panel-head">
            <h3 className="panel-title">Active Trades</h3>
          </div>
          <div className="trade-chart">
            <div className="trade-chart-header">
              <p>ENTRY</p>
              <p>CURRENT</p>
            </div>
            <div className="trade-chart-body">
              {trades.map((trade, index) => (
                <div className="trade-entry-block" key={index}>
                  <div className="entry">
                    <p className="crypto-worth">${trade.entrytValue}</p>
                    <p className="usdt-worth">${trade.entryUsdt}</p>
                  </div>
                  <div className="coin">
                    <p>{trade.coin}</p>
                    <p className={trade.profit === 0 ? "no-profit" : "profit"}>{trade.profit}x</p>
                  </div>
                  <div className="current">
                    <p className="crypto-worth">${trade.currentValue}</p>
                    <p className="usdt-worth">${trade.currentUsdt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;