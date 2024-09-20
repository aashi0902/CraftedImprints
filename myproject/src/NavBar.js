// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/home" className="navbar-logo">
//           <img
//             src="/images/logo.png"
//             alt="Crafted Imprints Logo"
//             className="navbar-logo-img"
//           />
//           <span>CRAFTED IMPRINTS</span>
//         </Link>
//         <ul className="navbar-links">
//           <li>
//             <Link to="/home">HOME</Link>
//           </li>
//           <li>
//             <Link to="/products">PRODUCT</Link>
//           </li>
//           <li>
//             <Link to="/gallery">GALLERY</Link>
//           </li>
//           <li>
//             <Link to="/contact">CONTACT US</Link>
//           </li>
//           <li>
//             <Link to="/profile">PROFILE</Link>
//           </li>
//           <li>
//             <Link to="/cart" className="navbar-cart">
//               <img
//                 src="/images/cart.png" // Replace with the path to your cart icon image
//                 alt="Cart"
//                 className="cart-icon"
//               />
//             </Link>
//           </li>
//         </ul>

//         <Link to="/" className="navbar-logout">
//           LOGOUT
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          <img
            src="/images/logo.png"
            alt="Crafted Imprints Logo"
            className="navbar-logo-img"
          />
          <span>CRAFTED IMPRINTS</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCT</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          {/* Profile Dropdown */}
          <li className="profile-dropdown" onClick={toggleDropdown}>
            <span>PROFILE</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/profile">Account</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping Details</Link>
                </li>
                <li>
                  <Link to="/message">Message</Link>
                </li>
                <li>
                  <Link to="/history">Order History</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/cart" className="navbar-cart">
              <img src="/images/cart.png" alt="Cart" className="cart-icon" />
            </Link>
          </li>
        </ul>

        <Link to="/" className="navbar-logout">
          LOGOUT
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
