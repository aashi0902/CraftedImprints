import React from "react";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Home.css";
import HomeProduct from "./HomeProduct";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HomeProduct />
      <hr />
      <div className="container">
        <h3 className="section-title">ORDERING IS EASY...</h3>
        <hr />
        <br />
        <div className="steps-grid">
          <div className="step-item">
            <img
              src="/images/o1.avif"
              alt="Choose Print"
              className="step-image"
            />
            <h4 className="step-title">1. CHOOSE YOUR PRODUCT</h4>
          </div>
          <div className="step-item">
            <img
              src="/images/o2.avif"
              alt="Personalize Content"
              className="step-image"
            />
            <h4 className="step-title">2. UPLOAD YOUR PERSONALISED CONTENT</h4>
          </div>
          <div className="step-item">
            <img
              src="/images/o3.avif"
              alt="Approve Proof"
              className="step-image"
            />
            <h4 className="step-title">3. APPROVE A DIGITAL PROOF</h4>
          </div>
          <div className="step-item">
            <img src="/images/o4.avif" alt="Checkout" className="step-image" />
            <h4 className="step-title">4. CHECKOUT</h4>
          </div>
          <div className="step-item">
            <img
              src="/images/o5.webp"
              alt="We Get Busy Printing"
              className="step-image"
            />
            <h4 className="step-title">5. WE GET BUSY PRINTING</h4>
          </div>
          <div className="step-item">
            <img
              src="/images/o6.avif"
              alt="Sit Back and Wait"
              className="step-image"
            />
            <h4 className="step-title">6. SIT BACK AND WAIT</h4>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Home;
