import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <div className="supply-chain-tracer">
      {/* Header */}
      <div className="header">TraceMed</div>

      {/* Menu */}
      <div className="menu">
        <button onClick={() => redirectTo("/roles")}>Register Roles</button>
        <button onClick={() => redirectTo("/addmed")}>Order Medicines</button>
        <button onClick={() => redirectTo("/supply")}>Control Chain</button>
        <button onClick={() => redirectTo("/track")}>Track Medicines</button>
      </div>

      {/* Footer */}
      <div className="footer">Made by Akshat, Devesh and Ruchir 😊</div>
    </div>
  );
}

export default Home;
