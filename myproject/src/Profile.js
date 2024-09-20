// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Profile.css";
// import NavBar from "./NavBar";
// import Footer from "./Footer";

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:3001/profile", {
//           withCredentials: true,
//         });
//         setUser(data);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching user profile");
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="profile-container">
//       <NavBar />
//       <h2 className="profile-title">MY PROFILE</h2>
//       <hr />
//       <div className="profile-card">
//         <br />
//         <div className="profile-item">
//           <label className="profile-label">NAME:</label>
//           <p className="profile-value">{user.name}</p>
//         </div>
//         <br />
//         <div className="profile-item">
//           <label className="profile-label">EMAIL:</label>
//           <p className="profile-value">{user.email}</p>
//         </div>
//         <br />
//         <div className="profile-item">
//           <label className="profile-label">PHONE NUMBER:</label>
//           <p className="profile-value">{user.phone}</p>
//         </div>
//         <br />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Profile.css";
// import NavBar from "./NavBar";
// import Footer from "./Footer";

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     profilePicture: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:3001/profile", {
//           withCredentials: true,
//         });
//         setUser(data);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching user profile");
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="profile-container">
//       <NavBar />
//       <h2 className="profile-title">MY PROFILE</h2>
//       <hr />
//       <div className="profile-card">
//         <br />
//         <div className="profile-picture-section">
//           <img
//             src={`http://localhost:3001${user.profilePicture}`}
//             alt="Profile"
//             className="profile-picture"
//           />
//         </div>
//         <div className="profile-item">
//           <label className="profile-label">NAME:</label>
//           <p className="profile-value">{user.name}</p>
//         </div>
//         <br />
//         <div className="profile-item">
//           <label className="profile-label">EMAIL:</label>
//           <p className="profile-value">{user.email}</p>
//         </div>
//         <br />
//         <div className="profile-item">
//           <label className="profile-label">PHONE NUMBER:</label>
//           <p className="profile-value">{user.phone}</p>
//         </div>
//         <br />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profilePicture: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/profile", {
          withCredentials: true,
        });
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching user profile");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("profilePicture", selectedFile);

    try {
      const { data } = await axios.post(
        "http://localhost:3001/profile/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      setUser({ ...user, profilePicture: data.profilePicture });
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading file", error);
      alert("Failed to upload profile picture");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <NavBar />
      <h2 className="profile-title">MY PROFILE</h2>
      <hr />
      <div className="profile-card">
        <br />
        <div className="profile-picture-section">
          <img
            src={`http://localhost:3001${user.profilePicture}`}
            alt="Profile"
            className="profile-picture"
          />
        </div>
        <br />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Profile Picture</button>
        <br />
        <div className="profile-item">
          <label className="profile-label">NAME:</label>
          <p className="profile-value">{user.name}</p>
        </div>
        <br />
        <div className="profile-item">
          <label className="profile-label">EMAIL:</label>
          <p className="profile-value">{user.email}</p>
        </div>
        <br />
        <div className="profile-item">
          <label className="profile-label">PHONE NUMBER:</label>
          <p className="profile-value">{user.phone}</p>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
