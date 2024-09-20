import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <h1 className="website-name">CRAFTED IMPRINTS</h1>
        <p className="tagline">Crafted by You, Perfected by Us!</p>
        <div className="button-group">
          <button className="landing-button" onClick={handleLogin}>
            LOGIN
          </button>
          <button className="landing-button" onClick={handleSignUp}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
