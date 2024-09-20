// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     console.log("Entering handleSubmit");
//     event.preventDefault();
//     try {
//       console.log("about to post");
//       const { data } = await axios.post(
//         "http://localhost:3001/login",
//         { email, password },
//         { withCredentials: true }
//       );
//       console.log(data);
//       //   Cookies.set("userRole", data.role, {expires: 1});
//       if (data.role === "user") navigate("/home");
//       else if (data.role === "admin") navigate("/admin");
//       else if (data.role === "vendor") navigate("/vendor");
//     } catch (error) {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <section className="login-section">
//       <div className="overlay"></div>
//       <div className="login-container">
//         <h1 className="login-title">
//           Welcome Back to
//           <br />
//           Crafted Imprints!
//         </h1>

//         <p className="login-subtitle">Access your account to continue...</p>

//         <form className="login-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">
//               EMAIL ID
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="example@gmail.com"
//               className="form-input"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password" className="form-label">
//               PASSWORD
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               className="form-input"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="login-button">
//             LOGIN
//           </button>

//           <p className="login-footer">
//             Don't have an account?{" "}
//             <Link to="/register" className="signup-link">
//               SIGN UP
//             </Link>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};

    // Email validation
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return; // Stop the form submission if validation fails

    try {
      const { data } = await axios.post(
        "http://localhost:3001/login",
        { email, password },
        { withCredentials: true }
      );

      if (data.role === "user") navigate("/home");
      else if (data.role === "admin") navigate("/admin");
      else if (data.role === "vendor") navigate("/vendor");
    } catch (error) {
      console.error("Invalid Credentials", error);
      alert("Invalid Credentials");
    }
  };

  return (
    <section className="login-section">
      <div className="overlay"></div>
      <div className="login-container">
        <h1 className="login-title">
          Welcome Back to
          <br />
          Crafted Imprints!
        </h1>

        <p className="login-subtitle">Access your account to continue...</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              EMAIL ID
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className={`form-input ${errors.email ? "error-input" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`form-input ${errors.password ? "error-input" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>

          <p className="login-footer">
            Don't have an account?{" "}
            <Link to="/register" className="signup-link">
              SIGN UP
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
