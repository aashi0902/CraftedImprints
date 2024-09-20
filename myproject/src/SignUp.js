import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};

    if (!name) {
      formErrors.name = "Name is required";
    }

    if (!role) {
      formErrors.role = "Role is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:3001/register", {
          name,
          role,
          email,
          phone,
          password,
        })
        .then((result) => {
          console.log(result);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="signup-section">
      <div className="overlay"></div>
      <div className="signup-container">
        <h1 className="signup-title">
          Welcome to
          <br />
          Crafted Imprints!
        </h1>

        <p className="signup-subtitle">Let’s get you all started....</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              NAME
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className={`form-input ${errors.name ? "error-input" : ""}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="role" className="form-label">
              ROLE
            </label>
            <select
              id="role"
              className={`form-input ${errors.role ? "error-input" : ""}`}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="admin">admin</option>
              <option value="user">user</option>
              <option value="vendor">vendor</option>
            </select>
            {errors.role && <p className="error-message">{errors.role}</p>}
          </div>

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
            <label htmlFor="phone" className="form-label">
              PHONE NUMBER
            </label>
            <input
              id="phone"
              type="text"
              placeholder="99XXXXXXXX"
              className={`form-input ${errors.phone ? "error-input" : ""}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
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

          <button type="submit" className="signup-button">
            SIGN UP
          </button>

          <p className="signup-footer">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              LOGIN
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
