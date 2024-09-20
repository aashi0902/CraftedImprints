import React from "react";
import "./Home.css";

const HomeProduct = () => {
  return (
    <div>
      <div className="container">
        <h3 className="section-title">PRODUCTS WE CUSTOMIZE</h3>
        <hr />
        <br />
        <div className="steps-grid">
          <div className="step-item">
            <img
              src="/images/k1.webp"
              alt="Choose Print"
              className="step-image"
            />
            <h4 className="step-title"> KEYCHAIN </h4>
          </div>
          <div className="step-item">
            <img
              src="/images/m1.webp"
              alt="Personalize Content"
              className="step-image"
            />
            <h4 className="step-title"> MUG </h4>
          </div>
          <div className="step-item">
            <img
              src="/images/c1.webp"
              alt="Approve Proof"
              className="step-image"
            />
            <h4 className="step-title">COASTER</h4>
          </div>
          <div className="step-item">
            <img src="/images/t1.avif" alt="Checkout" className="step-image" />
            <h4 className="step-title">BAG</h4>
          </div>
          <div className="step-item">
            <img
              src="/images/mg1.jpeg"
              alt="We Get Busy Printing"
              className="step-image"
            />
            <h4 className="step-title">MAGNET</h4>
          </div>
          <div className="step-item">
            <img
              src="/images/cl1.jfif"
              alt="Sit Back and Wait"
              className="step-image"
            />
            <h4 className="step-title">CALENDAR</h4>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeProduct;
