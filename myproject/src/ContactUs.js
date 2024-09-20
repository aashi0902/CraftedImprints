// import React, { useState } from "react";
// import "./ContactUs.css";
// import NavBar from "./NavBar";
// import Footer from "./Footer";

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     // Add form submission logic here, e.g., sending data to a server
//   };

//   return (
//     <div className="contact-page">
//       <NavBar />
//       <div className="contact-container">
//         <h1>CONTACT US</h1>
//         <p>We would love to hear from you! Please fill out the form below...</p>
//         <hr />
//         <br />
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">NAME</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">EMAIL</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="subject">SUBJECT</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Enter the subject"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">MESSAGE</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Type your message here"
//               rows="5"
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button">
//             SEND MESSAGE
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ContactUs;

import React, { useState } from "react";
import "./ContactUs.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/contact", formData, {
        withCredentials: true,
      });

      setSuccessMessage("Message sent successfully!");
      setErrorMessage("");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-container">
        <h1>CONTACT US</h1>
        <p>We would love to hear from you! Please fill out the form below...</p>
        <hr />
        <br />
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            SEND MESSAGE
          </button>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
