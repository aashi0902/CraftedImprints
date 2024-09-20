const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const ContactMessageModel = require("./models/ContactMessage");
const session = require("express-session");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "ashikaashok090204",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Static route to serve profile pictures
app.use("/uploads", express.static("uploads")); // Add this here

mongoose
  .connect(
    "mongodb+srv://aashitheexplorer09:root@craftedimprints.1ntl3.mongodb.net/user"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(401).json("Invalid Credentials");
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json("Invalid Credentials");
    }

    req.session.userId = user._id;
    res.status(200).json({ message: "Login Successful", role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// Contact form submission route
app.post("/contact", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Store the contact form data in the database
    const contactMessage = new ContactMessageModel({
      userId: req.session.userId,
      name,
      email,
      subject,
      message,
    });

    await contactMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/profile", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const user = await UserModel.findById(req.session.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// index.js
const multer = require("multer");
const path = require("path");

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with current timestamp to avoid name conflicts
  },
});

const upload = multer({ storage });

// Profile picture upload route
app.post(
  "/profile/upload",
  upload.single("profilePicture"),
  async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const profilePicture = `/uploads/${req.file.filename}`;

    try {
      // Update user's profile picture
      const user = await UserModel.findByIdAndUpdate(
        req.session.userId,
        { profilePicture },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ profilePicture: user.profilePicture });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error uploading profile picture", error });
    }
  }
);

app.listen(3001, () => {
  console.log("Server is running");
});

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const UserModel = require("./models/User");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// mongoose
//   .connect(
//     "mongodb+srv://aashitheexplorer09:root@craftedimprints.1ntl3.mongodb.net/user"
//   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error.message);
//   });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email: email });
//     if (!user) {
//       return res.status(401).json("Invalid Credentials");
//     }

//     const isMatch = await user.matchPassword(password);

//     if (!isMatch) {
//       return res.status(401).json("Invalid Credentials");
//     }

//     res.status(200).json({ message: "Login Successful", role: user.role });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// app.post("/register", (req, res) => {
//   UserModel.create(req.body)
//     .then((user) => res.json(user))
//     .catch((err) => res.json(err));
// });

// app.listen(3001, () => {
//   console.log("Server is running");
// });
